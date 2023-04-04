import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const {cartItems} = useContext(CartContext)

    console.log(cartItems)

    return (
        <div>
            {cartItems.map(product => 
                <div key={product.id}>
                        <h1>{product.name}</h1>
                        <h2>{product.price} ||| {product.quantity}</h2>
                        {/* <img src={element.image} alt="" /> */}
                </div>
            )}
        </div>
    )
}

export default Cart