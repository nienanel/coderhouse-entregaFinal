import React from "react"
import { useCart} from "./Cart/CartContext"

export default function Item({ product }) {
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        addToCart(product, 1);
    }

    return (
        <div className="item">
            <img src={product.image} width={150} alt="" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={handleAddToCart}>Buy</button>
        </div>
    )
}