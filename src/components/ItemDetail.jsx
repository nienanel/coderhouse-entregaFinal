import React from "react";
import "./ItemListContainer.css";

function ItemDetail({ item}) {
    return (
        <div className="itemDetail">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <h3>Precio: ${item.price}</h3>
            <p>Descripción: {item.description}</p>
        </div>
    )
}

export default ItemDetail;