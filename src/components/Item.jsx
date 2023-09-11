import React from "react"
export default function Item( {product}) {
    return (
        <div className="item">
            <img src={product.image} width={150} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}