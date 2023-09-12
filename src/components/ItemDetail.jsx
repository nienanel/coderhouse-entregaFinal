import React from "react"

export default function ItemDetail({item}) {
    return (
        <div className="itemDetail">
            <img src={item.image} width={150} alt="" />
            <h2>{item.name}</h2>
            <p>Precio:${item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}