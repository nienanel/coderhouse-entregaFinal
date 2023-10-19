import React from "react";
import "./ItemListContainer.css";

function ItemDetail({ item }) {

    return (
        <div className="itemDetail">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} style={{ width: 400 }} />
            <h3>Precio: ${item.price}</h3>
            <h4>Descripción: {item.description || item.desciption}</h4>
        </div>

    )
}

export default ItemDetail;