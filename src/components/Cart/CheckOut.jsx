import React from "react";
import { useCart } from "./CartContext";


function CheckOut() {

    const { cart } = useCart();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="checkOut">   
        <div className="detail">
            <h1>Your Purchase</h1>
            <h2>Total: ${total.toFixed((2))}</h2>
            <p>{cart.length} items</p>
        </div>
        <button>confirm</button>
        <button>cancel</button>
        </div>
    );
}

export default CheckOut;