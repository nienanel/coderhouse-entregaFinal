import React from 'react';
import { useCart } from './CartContext';
import "../ItemListContainer.css"

export default function BuyButton({ item }) {
    const { addToCart, removeFromCart, clearCart } = useCart();

    return (
        <div className='buttons'>
            <button onClick={() => addToCart(item, 1)}>Buy</button>
            <button onClick={() => removeFromCart(item.id, -item.quantity)}>Remove Item</button>
            {item.quantity > 1 && (
                <button onClick={() => removeFromCart(item.id, 1)}>Remove</button>
            )}
            {item.quantity === 1 && <button onClick={clearCart}>Clear Cart</button>}
        </div>
    );
}