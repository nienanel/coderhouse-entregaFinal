import React, { useEffect, useState } from 'react';
import productos from "../productos.json";
import Item from "./Item";
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

function getProducts(category) {
    return new Promise((resolve) => {
        setTimeout(() => {

            if (category != undefined) {
                const filteredProducts = productos.filter((product) => product.category === category);
                resolve(filteredProducts);
                console.log(filteredProducts);
            }
            else {
                resolve(productos);

            }
        }, 2000);
    });
}

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category).then((esquies) => {
            console.log(esquies);
            setProducts(esquies);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>cargando....</p>
    }

    return (
        <div className='ItemList'>
            {products.map((product) => {
                return <ul key={product.id}>
                    <li>
                        <Item key={product.id} product={product} />
                        <ItemCount className="contador" />
                    </li>
                </ul>
            })}
        </div>
    )

}

