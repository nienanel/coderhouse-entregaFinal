import React, { createContext, useState, useContext, useEffect } from 'react';
import { addToCartWithUniqueKey, getCartFromLocalStorage, saveCartToLocalStorage } from './CartStorage';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => getCartFromLocalStorage());

    useEffect(() => {
        saveCartToLocalStorage(cart);
    }, [cart]);

    const addToCart = (item, quantity) => {
        setCart((prevCart) => {
            const updatedCart = addToCartWithUniqueKey(item, quantity, prevCart);
            return updatedCart;
        });
    };

    const removeFromCart = (itemUniqueKey) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.uniqueKey !== itemUniqueKey);
            console.log('Updated Cart:', updatedCart);
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;