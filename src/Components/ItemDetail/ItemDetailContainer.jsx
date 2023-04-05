import ItemDetail from "./ItemDetail";
import Loading from "../../Extra/Loading/Loading";
import Swal from "sweetalert2";

import { useParams } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { useContext, useState, useEffect } from "react";

import { database } from "../../firebase-config";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart, getQuantityById } = useContext(CartContext)
    const [selectedProduct, setSelectedProduct] = useState({})
    
    document.title = "Xtech AR | Producto..."

    useEffect(() => {
        const itemCollection = collection(database, 'products');
        const ref = doc(itemCollection, id);
        getDoc(ref)
            .then(res => {
                setSelectedProduct({ ...res.data(), id: res.id })
            })
    }, [id]);

    useEffect(() => {
        const newTitle = selectedProduct.name;
        if (newTitle) {
            document.title = `Xtech AR | ${newTitle}`;
        }
    }, [selectedProduct, addToCart])

    const onAdd = quantity => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Productos agregados al carrito!',
            showConfirmButton: false,
            timer: 1500
        })

        addToCart({
            ...selectedProduct,
            quantity
        })
    }

    if (!Object.keys(selectedProduct).length) return <Loading />
    return <ItemDetail selectedProduct={selectedProduct} onAdd={onAdd} initial={() => getQuantityById(id)} />
}

export default ItemDetailContainer;