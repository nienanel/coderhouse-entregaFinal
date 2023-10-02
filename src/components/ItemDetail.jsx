import React from 'react';

function ItemDetail({ selectedItem }) {
    return (
        <div className="itemDetail">
            <img src={selectedItem.image} width={150} alt="" />
            <h2>{selectedItem.name}</h2>
            <p>Precio: ${selectedItem.price}</p>
            <p>{selectedItem.description}</p>
        </div>
    );
}

export default ItemDetail;
