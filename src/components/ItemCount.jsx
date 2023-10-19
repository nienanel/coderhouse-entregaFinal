import "./ItemListContainer.css";
import React, { useState } from "react";
import { useCart } from "./Cart/CartContext"

export default function ItemCount({ initialCount, onCountChange, item }) {

    const [count, setCount] = useState(initialCount);
    const { addToCart } = useCart();

    const handleAdd = () => {
        if (count < 5) {
            const newCount = count + 1;
            setCount(newCount);
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
        }
    };

    const handleAddToCart = () => {
        addToCart(item, count); 
    };

    return (
        <div className="counter">
            <button onClick={handleSubtract}> - </button>
            <p>{count}</p>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}
