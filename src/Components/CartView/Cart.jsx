import styles from './Cart.module.css'

const Cart = ({ safeClear, cartItems, setCheckout, deleteProduct, totalBill }) => {
    return (
        <div className={styles.cart_container}>
            <div className={styles.products_container}>
                {cartItems.map(product =>
                    <div key={product.id} className={styles.product}>
                        <img src={product.image} alt={product.name + '-img'} />
                        <div>
                            <h1>{product.name}</h1>
                            <h4>{product.brand}</h4>
                        </div>
                        <div>
                            <h3>{product.quantity} {product.quantity === 1 ? "unidad" : "unidades"}</h3>
                            <h5>{product.stock} {product.stock === 1 ? "disponible" : "disponibles"}</h5>
                        </div>
                        <h2>$ {(product.price * product.quantity).toFixed(2)}</h2>
                        <button onClick={() => deleteProduct(product.id)}>
                            <img src="https://res.cloudinary.com/dews3zbls/image/upload/v1680622646/elements/trash-2-128_hqoxc8.png" alt="" />
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.summary}>
                <div className={styles.detail_container}>
                    <div className={styles.detail}>
                        <p className={styles.words}>Total: </p>
                        $<p>{totalBill.toFixed(2)}</p>
                        <p className={styles.words}>Envío: </p>
                        $<p>30.00</p>
                    </div>
                    <div className={styles.detail}>
                        <p className={styles.wordx}>Total con envío: </p>
                        $<p>{(totalBill + 30).toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={() => { setCheckout(true) }}>Continuar</button>
                <button onClick={safeClear}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart