import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./Components/ItemList/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";
import CartContainer from "./Components/CartView/CartContainer";

import './index.css'

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>

                    <Route path="/" element={<ItemListContainer />} />

                    <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />

                    <Route path='/category/:categoryId' element={<ItemListContainer />} />

                    <Route path="/cart" element={<CartContainer/>} />

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
