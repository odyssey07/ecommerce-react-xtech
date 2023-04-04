import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { useContext, useState, useEffect } from "react";

import { database } from "../../firebase-config";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const {addToCart} = useContext(CartContext)
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        const itemCollection = collection(database, 'products');
        const ref = doc(itemCollection, id);
        getDoc(ref)
            .then(res => {
                setSelectedProduct({...res.data(), id: res.id})    
            } 
            )
    }, [id])

    console.log(selectedProduct)

    const onAdd = quantity => {
        addToCart({
            ...selectedProduct,
            quantity
        })
    }

    if (!Object.keys(selectedProduct).length) return <h1>Cargando...</h1>
    return (<ItemDetail selectedProduct={selectedProduct} onAdd={onAdd}/>)
}

export default ItemDetailContainer