import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../DataFetchingComponent';
import ItemList from './ItemList';

function ItemListContainer() {
    const { data, loading } = useDataContext();
    const { category } = useParams();

    if (loading) {
        return <p>Loading...</p>;
    }

    const { productos } = data;

    const filteredProducts = category
        ? productos.filter(product => product.category === category)
        : productos;

    return (
        <div>
            <h2>Product List</h2>
            <ItemList productos={filteredProducts} />

        </div>
    );
}

export default ItemListContainer;
