import "./Cart.css"
import React from 'react';
import { useCart } from './CartContext';
import BuyButton from './BuyButton';

function CartContainer() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="cartContainer">
            <h1>Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    {item.name} - ${item.price} - Quantity: {item.quantity}
                    <BuyButton item={item} />
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={() => removeFromCart(1)}>Remove Item</button>
        </div>
    );
}

export default CartContainer;