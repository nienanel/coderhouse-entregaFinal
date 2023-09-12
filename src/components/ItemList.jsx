import React, { useEffect, useState } from 'react';
import productos from "../productos.json";
import Item from "./Item";
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            let filteredProducts;

            if (category) {
                filteredProducts = productos.filter((product) => product.category === category);
            } else {
                filteredProducts = productos;
            }

            setProducts(filteredProducts);
            setLoading(false); 
        }, 2000); 
    }, [category]);

    if (loading) {
        return <p>cargando....</p>;
    }

    return (
        <div className='ItemList'>
            {products.map((product) => {
                return <ul key={product.id}>
                    <li>
                        <Item product={product} />
                        <ItemCount className="contador" />
                    </li>
                </ul>
            })}
        </div>
    )
}

