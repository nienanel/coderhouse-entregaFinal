import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ productos }) {
    return (
        <div className='ItemList'>
            {productos.map((productos) => (
                <div key={productos.id} className="product">
                    <img src={productos.image} alt={productos.name} />
                    <h3>{productos.name}</h3>
                    <p>Precio: ${productos.price}</p>
                    <Link to={`/items/${productos.id}`}>Saber más</Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
