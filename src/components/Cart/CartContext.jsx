import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(item, quantity) {
        const itemBuyed = cart.find((cartItem) => cartItem.id === item.id);

        if (itemBuyed) {
            itemBuyed.quantity += quantity;
            setCart([...cart]);
        } else {
            const newItem = { ...item, quantity };
            setCart([...cart, newItem]);
        }
    }

    function removeFromCart(itemId) {
        const updateCart = cart.filter((item) => item.id !== itemId);
        setCart(updateCart);
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}