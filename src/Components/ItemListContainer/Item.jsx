import React from "react";

import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
    return (
        <div className={styles["item-container"]}>
            <img className={styles.product} src={element.image} alt="Not found" />
            <h2>{element.name}</h2>
            <p className={styles.description}>{element.description}</p>
            <div className={styles["last-container"]}>
                <Link to={`/itemDetail/${element.id}`}>
                    <button className={styles["more-details"]}>Ver más</button>
                </Link>
                <h3><span>$</span>{element.price.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Item;
