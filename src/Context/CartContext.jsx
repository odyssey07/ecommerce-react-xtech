import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    
    const [cartItems, setCartItems] = useState([]);

    /* const addToCart = product => {
        const prdIndex = cartItems
            .findIndex(element => element.id === product.id);

        if (prdIndex === -1) setCartItems([...cartItems, product])
        else {
            cartItems[prdIndex].quantity += product.quantity;
            setCartItems([...cartItems]);
        }
    } */

    const addToCart = product => {
        const choosenProduct = cartItems
            .find(element => element.id === product.id);

        if (!choosenProduct) setCartItems([...cartItems, product])
        else {
            choosenProduct.quantity += product.quantity;
            setCartItems([...cartItems]);
        }
    }

    const data = {
        cartItems,
        addToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider