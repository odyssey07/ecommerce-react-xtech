import ItemCount from './ItemCount'

import styles from './ItemDetail.module.css'

const ItemDetail = ({ selectedProduct, onAdd, initial }) => {
    return (
        <div className={styles.detailContainer}>
            <img src={selectedProduct.image} alt="" />
            <div className={styles.detailControls}>
                <h3>{selectedProduct.brand}</h3>
                <h2>{selectedProduct.name}</h2>
                <p className={styles.detailDescription}>{selectedProduct.description}</p>
                <p className={styles.price}><span>$ </span>{selectedProduct.price.toFixed(2)}</p>
                <p className={styles.stock}>{
                    selectedProduct.stock > 1 
                        ? `¡${selectedProduct.stock} unidades disponibles!`
                        : selectedProduct.stock === 1
                            ? `¡Queda solo una unidad!`
                            : `Sin stock`
                }</p>
                <ItemCount stock={selectedProduct.stock} onAdd={onAdd} initial={initial}/>
            </div>
        </div>
    )
}

export default ItemDetail;