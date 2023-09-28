import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import BuyButton from './Cart/BuyButton';

function ItemDetailContainer() {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Simular una llamada a una API
        fetch(`/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setSelectedItem(data);
                } else {
                    console.error(`No se encontró el producto con el id ${id}`);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar el producto:', error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <React.Fragment>
                    <ItemDetail item={selectedItem} />
                    <BuyButton product={selectedItem} />
                </React.Fragment>
            )}
        </div>
    );
}

export default ItemDetailContainer;