import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Simula una llamada a una API utilizando fetch para obtener los productos desde el archivo JSON local
        fetch('/productos.json')
            .then((response) => response.json())
            .then((data) => {
                let filteredProducts;

                if (category) {
                    filteredProducts = data.filter((product) => product.category === category);
                } else {
                    filteredProducts = data;
                }

                setProducts(filteredProducts);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <p>Cargando....</p>;
    }

    return (
        <div className='ItemList-Container'>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
