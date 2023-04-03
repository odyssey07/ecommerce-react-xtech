import ItemList from "./ItemList";

import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            const filteredProducts = products.filter(product => product.category === categoryId);
            setTimeout(() => {
                resolve(categoryId ? filteredProducts : products);
            }, 0);
        })

        productList
            .then((res) => {setItems(res)})
            .catch((error) => {console.log(error)})
    }, [categoryId]);

    return (
        <div style={{
            // marginTop: "2.5rem",
        }}>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
