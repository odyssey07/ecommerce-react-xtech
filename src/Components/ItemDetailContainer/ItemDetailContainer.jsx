import { useParams } from "react-router-dom";
import { products } from '../../productsMock';

import styles from './ItemDetailContainer.module.css'
import ItemCount from './ItemCount'
import { CartContext } from '../../Context/CartContext';
import { useContext } from "react";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const {addToCart} = useContext(CartContext)

    const selectedProduct = products.find((element) => element.id === id*1);

    const onAdd = quantity => {
        addToCart({
            ...selectedProduct,
            quantity
        })
    }

    return (
        <div className={styles.detailContainer}>
            <img src={selectedProduct.image} alt="" />
            <div className={styles.detailControls}>
                <h3>{selectedProduct.brand}</h3>
                <h2>{selectedProduct.name}</h2>
                <p className={styles.detailDescription}>{selectedProduct.description}</p>
                <p className={styles.price}><span>$ </span>{selectedProduct.price.toFixed(2)}</p>
                <ItemCount stock={selectedProduct.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer