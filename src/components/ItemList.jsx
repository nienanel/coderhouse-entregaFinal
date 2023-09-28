import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ItemList() {
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
        return <h1>Cargando...</h1>;
    }

    function getCategoryTitle() {
        switch (category) {
            case 'Mountain':
                return 'Productos de Montaña';
            case 'Race':
                return 'Productos de Carrera';
            default:
                return 'Lista de Productos';
        }
    }

    return (
        <div className='ItemList'>
            <h1>{getCategoryTitle()}</h1>
            {products.map((product) => (
                <ul key={product.id}>
                    <li>
                        <Link to={`/items/${product.id}`}> Saber más </Link>
                        <Item product={product} />
                        {/* Agrega aquí tu componente ItemCount si es necesario */}
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default ItemList;
