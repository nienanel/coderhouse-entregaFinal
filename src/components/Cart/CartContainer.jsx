import "./Cart.css"
import React from 'react';
import { useCart } from './CartContext';
import { Link } from "react-router-dom";

function CartContainer() {
    const { cart, clearCart, removeFromCart } = useCart();

    const handleRemoveFromCart = (itemUniqueKey) => {
        removeFromCart(itemUniqueKey);
    };

    return (
        <div className="cartContainer" >
            <h1>Cart</h1>
            {cart.map((item) => (
                <div className="cartitem" key={item.uniqueKey}>
                    <div className="cartItemInfo">
                        <img src={item.image} alt={item.name} style={{ width: 150 }} />
                        <div>
                            {item.name} - ${item.price} - Quantity: {item.quantity}
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.uniqueKey)}>Remove Item</button>
                    </div>

                </div>
            ))}
            <div className="cartActions">
                <button onClick={clearCart}>Clear Cart</button>
                <Link to="/checkout">
                    <button>Finish</button>
                </Link>
            </div>
        </div>
    );
}


export default CartContainer;