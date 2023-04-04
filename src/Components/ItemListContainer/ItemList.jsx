import Item from './Item'

import styles from './ItemList.module.css'

const ItemList = ({ items }) => {
    return (
        <div className={styles.itemListContainerV1}>
            {items
                .map((product) => 
                    <Item element={product} key={product.id} />
                )
            }
        </div>
    )
}

export default ItemList;
