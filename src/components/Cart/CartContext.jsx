import React, { createContext, useState, useContext, useEffect } from 'react';

/* Firebase y fetch */
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useDataContext } from '../../DataFetchingComponent';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export function CartProvider({ children }) {
    const { data } = useDataContext();
    const [cart, setCart] = useState([]);
    const db = getFirestore();


    /*  carga de el carrito desde firebase cuando se monta el componente  */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartCollection = collection(db, 'cart');
                const res = await getDocs(cartCollection);
                const cartList = res.docs.map((doc) => doc.data());
                setCart(cartList);
            } catch (error) {
                console.error('Error al cargar el carrito desde Firestore:', error);
            }
        };
        fetchData();
    }, [db, data]);

    /*  agregar al carrito  */
    const addToCart = async (item, quantity) => {
        try {
            const cartCollection = collection(db, "cart");
            const newItem = { ...item, quantity };
            await addDoc(cartCollection, newItem);
            setCart([...cart, newItem]);
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
    };
    /*  eliminar un elemnto del carrito  */
    const removeFromCart = async (itemid) => {
        try {
        const cartCollection = collection(db, "cart");
        await deleteDoc(doc(cartCollection, itemid));
        const updateCart = cart.filter((item) => item.id !== itemid);
        setCart(updateCart);
    } catch (error) {
        console.error('Error al eliminar del carrito:', error);
    }
    };

    /*  limpiar el carrito  */
    const clearCart = async () => {
        try {
        const cartCollection = collection(db, "cart");
        const cartStatus = await getDocs(cartCollection);
        const deletePromises = cartStatus.docs.map((doc) => deleteDoc(doc.ref));
        await Promise.all(deletePromises);
        setCart([]);
    } catch (error) {
        console.error('Error al limpiar el carrito:', error);
    }
    };

    /*actualizar cantidades del carrito */
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
}