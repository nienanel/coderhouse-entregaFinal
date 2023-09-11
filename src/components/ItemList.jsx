import React , { useEffect, useState } from 'react';
import productos from "../productos.json";
import Item from "./Item";
import ItemCount from './ItemCount';

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((esquies) => { 
            setProducts(esquies);
            setLoading(false);
        });
    },[]);

    if(loading) {
        return <p>cargando....</p>
    }

    return (
        <div className='ItemList'>
            {products.map((product) => {
                return <ul>
                    <li>
                    <Item key={product.id} product={product} />
                    <ItemCount className="contador" />  
                    </li>
                </ul>            
            })}
        </div>
    )
    
}
