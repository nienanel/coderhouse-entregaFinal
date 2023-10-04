import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import BuyButton from './Cart/BuyButton';
import { useDataContext } from '../DataFetchingComponent';
import "./ItemListContainer.css";


function ItemDetailContainer() {
    const { id } = useParams();
    const { data, loading } = useDataContext();

    const selectedItem = data.productos.find(product => product.id === id);

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                selectedItem ? (
                    <>
                        <ItemDetail item={selectedItem} />
                        <BuyButton item={selectedItem} />
                    </>
                ) : (
                    <h2>Producto no encontrado</h2>
                )
            )}
        </div>
    );
}

export default ItemDetailContainer;