import ItemList from "./ItemList";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase-config";


const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

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

    return (<ItemList items={items}/>)
}

export default ItemListContainer;
