import styles from './ItemCount.module.css';
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) setCount(count + 1);
    };

    const subtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div>
            <div className={styles.controls+' '+(!stock ? styles.disabled_count : "")}>
                <button onClick={subtract}><span>-</span></button>
                <p className={styles.count}>{!stock ? 0 : count}</p>
                <button onClick={add}>+</button>
            </div>
            <button 
                className={styles.addToCart} 
                onClick={() => onAdd(count)}
                disabled={!stock ? true : false}
            >
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount;