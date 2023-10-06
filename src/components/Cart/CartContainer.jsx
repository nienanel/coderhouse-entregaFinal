import "./Cart.css"
import React from 'react';
import { useCart } from './CartContext';
import BuyButton from './BuyButton';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";


function CartContainer() {
    const { cart, removeFromCart, clearCart, updateCart } = useCart();

    function updateCartItemQuantity(itemId, newQuantity) {
        const updatedCart = cart.map((item) => item.id === itemId ? { ...item, quantity: newQuantity } : item);

        updateCart(updatedCart);
    }

    return (
        <div className="cartContainer">
            <h1>Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <div className="cartItem">
                        <div className="cartItemInfo">
                            <img src={item.image} alt={item.name} style={{ width: 150 }} />
                            <div>
                                {item.name} - ${item.price} - Quantity: {item.quantity}
                            </div>
                        </div>
                        <div className="cartItemActions">
                            <ItemCount
                                initialCount={item.quantity}
                                onCountChange={(newQuantity) =>
                                    updateCartItemQuantity(item.id, newQuantity)
                                }
                                item={item} />
                            <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="cartActions">
            <Link to="/checkout">
                <button>Buy</button>
                </Link>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
}


export default CartContainer;