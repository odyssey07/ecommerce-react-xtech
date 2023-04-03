import React from 'react'
import Item from './Item'

import styles from './ItemList.module.css'

const ItemList = ({ items }) => {
   return (
      <div className={styles.itemListContainerV1}>
         {items.map((element) => {
            return (
               <Item element={element} key={element.id} /> // The key goes with the mapping
            )
         })}
      </div>
   )
}

export default ItemList;
