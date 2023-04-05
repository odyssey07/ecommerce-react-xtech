import styles from './EmptyCart.module.css'

const EmptyCart = () => {
    return (
        <div className={styles.empty_cart_container}>
            <img src="https://res.cloudinary.com/dews3zbls/image/upload/v1680619133/elements/shopping-cart-empty-side-view_e2q87s.png" alt="" />
            <h2>No hay elementos en el carrito</h2>
            <h3>Parece que aún no has agregado nada a tu carrito de compras. ¡No te preocupes! Puedes seguir navegando por nuestra tienda y agregar los productos que desees. ¡Gracias por visitarnos!</h3>
        </div>
    )
}

export default EmptyCart