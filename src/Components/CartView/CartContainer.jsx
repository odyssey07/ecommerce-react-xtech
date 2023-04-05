import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'

import CheckoutContainer from "../Checkout/CheckoutContainer";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    document.title = "Xtech AR | Carrito de compras"

    const { cartItems, clearCart, getTotalBill, deleteProduct } = useContext(CartContext)
    const notEmpty = cartItems.length > 0;

    const totalBill = getTotalBill() * 1;
    const [checkout, setCheckout] = useState(false);

    const safeClear = () => {
        Swal.fire({
            title: '¿Seguro quieres vaciar el carrito?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: "rgb(51, 192, 248)",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire('Se ha vaciado tu carrito', '', 'success')
            }
        })
    }

    if (checkout) return <CheckoutContainer setCheckout={setCheckout}/>

    if (notEmpty) return (
        <Cart 
            safeClear={safeClear}
            cartItems={cartItems}
            totalBill={totalBill}
            setCheckout={setCheckout}
            deleteProduct={deleteProduct}
        />
    )

    return <EmptyCart/>
}

export default CartContainer