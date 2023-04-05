import { useContext, useState } from 'react'
import Success from './Success';
import Checkout from './Checkout';
import Loading from "../../Extra/Loading/Loading";
import Swal from "sweetalert2";

import { CartContext } from '../../Context/CartContext';

import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { database } from '../../firebase-config';

const CheckoutContainer = () => {
    document.title = "Xtech AR | Finalizar compra"

    const checkPhone = phone => {
        phone = phone.trim();
        const allowed = /[0-9]/g;
        return phone.replace(allowed, '').length === 0
            && (10 <= phone.length && phone.length <= 12)
    }

    const checkEmail = email => {
        const test1 = email.match(/@/g) || [];

        if (test1.length === 1) {
            const address = email.slice(email.indexOf('@') + 1);
            const test2 = address.match(/\./g) || [];

            if ([1, 2].includes(test2.length)) {
                if (address.match(/\.\./g)) return false

                const validProviders = ['gmail', 'outlook', 'yahoo'];
                const validTLD = ['com', 'net'];
                const validCcTLD = ['ar', 'br', 'mx', 'cl'];

                const addressComp = address.split('.');

                const test4 = validProviders.includes(addressComp[0]);

                return addressComp.length === 2 ?
                    [...validTLD, ...validCcTLD].includes(addressComp[1]) && test4 :
                    validTLD.includes(addressComp[1]) && validCcTLD.includes(addressComp[2]) && test4;
            } return false
        } return false
    }

    const checkName = name => {
        name = name.trim();
        const notAllowed = /[0-9]/g;
        return name.replace(notAllowed, '').length === name.length
            && name.length >= 7 
            // 6 puse como caracteres de seguridad... Sol Paz
    }


    const { cartItems, getTotalBill, clearCart } = useContext(CartContext);

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [orderId, setOrderId] = useState(null);

    const [didBuy, setDidBuy] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let message = "Datos inválidos:";
        let shouldContinue = true;

        const check = (func, data, msg) => {
            if (!func(userData[data])) {
                message += ` ● ${msg}`;
                shouldContinue = false;
            }
        }

        check(checkEmail, "email", "Email")
        check(checkName, "name", "Nombre y Apellido")
        check(checkPhone, "phone", "Teléfono")

        if (!shouldContinue) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        if (userData.email !== userData.email2) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Los e-mail no coinciden.",
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        const order = {
            buyer: userData,
            imems: cartItems,
            total: getTotalBill()
        }
        const orderCollection = collection(database, 'orders');

        setDidBuy(true);

        addDoc(orderCollection, order)
            // Para el usuario, un ID de su compra
            .then(res => {
                setOrderId(res.id);
                clearCart();
                setDidBuy(false);
            })
            .catch(err => console.log(err))

        cartItems.map(product => {
            const docRef = doc(database, "products", product.id)
            updateDoc(docRef, { stock: product.stock - product.quantity })
            return product
        })
    }

    if (orderId) return <Success orderId={orderId} />

    if (didBuy) return <Loading />

    return (
        <Checkout
            handleSubmit={handleSubmit}
            userData={userData}
            setUserData={setUserData}
        />
    )
}

export default CheckoutContainer