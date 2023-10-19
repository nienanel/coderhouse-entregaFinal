import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useDataContext } from '../DataFetchingComponent';
import ItemCount from './ItemCount';
import { useCart } from './Cart/CartContext';
import "./ItemListContainer.css";
import "./Cart/Cart.css"


function ItemDetailContainer() {
    const { id } = useParams();
    const { data, loading } = useDataContext();
    const { cart, updateCart, addToCart } = useCart();
    const selectedItem = data.productos.find(product => product.id === id);

    function updateCartItemQuantity(itemUniqueKey, newQuantity) {
        const updatedCart = cart.map((item) =>
            item.itemUniqueKey === itemUniqueKey ? { ...item, quantity: newQuantity } : item
        );
        updateCart(updatedCart);
    }

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                selectedItem ? (
                    <div className="cartItemInfo" key={selectedItem.id} >
                        <ItemDetail item={selectedItem} />
                        <ItemCount
                            initialCount={1}
                            onCountChange={(newQuantity) =>
                                updateCartItemQuantity(selectedItem.id, newQuantity)
                            }
                            item={selectedItem}
                            addToCart={addToCart} />
                    </div>
                ) : (
                    <h2>Producto no encontrado</h2>
                )
            )}
        </div>
    );
}

export default ItemDetailContainer;