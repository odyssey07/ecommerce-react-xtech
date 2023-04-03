import styles from './ItemCount.module.css';
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) setCount(count + 1);
    };

    const subtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div>
            <div className={styles.controls}>
                <button onClick={subtract}><span>-</span></button>
                <p className={styles.count}>{count}</p>
                <button onClick={add}>+</button>
            </div>
            <button className={styles.addToCart} onClick={() => onAdd(count)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;
