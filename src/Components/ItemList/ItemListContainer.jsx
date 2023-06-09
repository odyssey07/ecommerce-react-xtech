import ItemList from "./ItemList";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase-config";
import Loading from "../../Extra/Loading/Loading";


const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    const mayus = string => string[0].toUpperCase()+string.slice(1)

    if(categoryId) document.title = `Xtech AR | ${mayus(categoryId)}`
    else document.title = "Xtech AR | Inicio"

    useEffect(() => {
        const itemsCollection = collection(database, 'products');    
        
        let itemsData;
        categoryId
            ? itemsData = query(itemsCollection, where("category", "==", categoryId))
            : itemsData = itemsCollection
        
        getDocs(itemsData)
            .then(res => res.docs
                .map(product => 
                    Object({...product.data(), id: product.id})
                )
            )
            .then(res => {setItems(res)}) 
    }, [categoryId]);

    if (items.length === 0) return <Loading/>
    return <ItemList items={items}/>
}

export default ItemListContainer;
