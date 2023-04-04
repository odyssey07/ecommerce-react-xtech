import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import './index.css'
import CartContextProvider from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>

                    <Route path="/" element={<ItemListContainer />} />

                    <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />

                    <Route path='/category/:categoryId' element={<ItemListContainer />} />

                    <Route path="/cart" element={<Cart/>} />

                    <Route path="*" element={<h1 style={{
                        fontFamily: "Segoe UI",
                        margin: "2rem",
                        fontSize: "3rem",
                        color: "white",
                        fontWeight: "normal"
                    }}>
                        Error 404 - Not Found</h1>
                    } />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
