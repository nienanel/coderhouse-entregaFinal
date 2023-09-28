import React from 'react';
import { useCart } from './CartContext';

export default function BuyButton({ product }) {
    const { addToCart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <button onClick={() => addToCart(product, 1)}>Buy</button>
            <button onClick={() => removeFromCart(product.id)}>Remove Item</button>
            {product.quantity > 1 && (
                <button onClick={() => removeFromCart(product.id, 1)}>Remove</button>
            )}
            {product.quantity === 1 && <button onClick={clearCart}>Clear Cart</button>}
        </div>
    );
}