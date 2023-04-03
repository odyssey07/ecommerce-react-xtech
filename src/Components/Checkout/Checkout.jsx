import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Checkout = () => {
    const {cartItems} = useContext(CartContext)

    console.log(cartItems)

    return (
        <div>
            {
                cartItems.map(element => {
                    return <div key={element.id}>
                            <h1>{element.name}</h1>
                            <h2>{element.price} ||| {element.quantity}</h2>
                            {/* <img src={element.image} alt="" /> */}
                    </div>
                    
                })
            }
        </div>
    )
}

export default Checkout