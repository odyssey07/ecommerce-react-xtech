import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const {getTotalItems} = useContext(CartContext);

    return (
        <div>
            <Button style={{ fontSize: "1.8rem" }} variant="Text"
                startIcon={<ShoppingCartIcon style={{ fontSize: "50px" }} />}>
                {getTotalItems()}
            </Button>
        </div>
    );
};

export default CartWidget;
