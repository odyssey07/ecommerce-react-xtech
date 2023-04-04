import ItemCount from './ItemCount'

import styles from './ItemDetail.module.css'

const ItemDetail = ({ selectedProduct, onAdd }) => {
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

export default ItemDetail