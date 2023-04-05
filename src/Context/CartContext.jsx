import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    
    const [cartItems, setCartItems] = useState([]);

    const addToCart = product => {
        const cartItemsCopy = [...cartItems];

        const choosenProduct = cartItemsCopy
            .find(element => element.id === product.id);

        if (!choosenProduct) setCartItems([...cartItems, product])
        else {
            choosenProduct.quantity = product.quantity;
            setCartItems([...cartItemsCopy]);
        }
    }

    const clearCart = () => {setCartItems([])}

    const getTotalItems = () => cartItems
        .reduce((acc, elem) => acc+elem.quantity, 0)

    const getTotalBill = () => cartItems
        .reduce((acc, elem) => acc+elem.price*elem.quantity, 0)
        .toFixed(2)

    const deleteProduct = id => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    }

    const getQuantityById = id => {
        const item = cartItems.find(item => item.id === id);
        if (item) return item.quantity;
        else return 1;
    }

    const data = {
        cartItems,
        addToCart,
        clearCart,
        getTotalItems,
        getTotalBill,
        deleteProduct,
        getQuantityById
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;