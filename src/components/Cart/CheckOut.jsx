import React, { useState } from "react";
import { useCart } from "./CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "./Cart.css"

function CheckOut() {
    const { cart, clearCart } = useCart();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirm = () => {
        const db = getFirestore();
        const purchaseData = {
            buyer: {
                name: name,
                email: email,
            },
            items: cart,
            total: total,
        };
        const purchaseCollection = collection(db, "purchases");

        addDoc(purchaseCollection, purchaseData)
            .then((docRef) => {
                console.log("Documento guardado con ID: ", docRef.id);
                clearCart();
                setConfirmed(true);
            })
            .catch((error) => {
                console.error("Error al guardar el documento: ", error);
            });
    };

    return (
        <div className="checkOutContainer">
            {confirmed ? (
                <div className="checkOut">
                    <h2>Thank you for your purchase!</h2>
                </div>
            ) : (
                <div>
                    <div className="detail">
                        <h1>Your Purchase</h1>
                        <h2>Total: ${total.toFixed(2)}</h2>
                        <p>{cart.length} items</p>
                    </div>
                    <div>
                        <form action="" className="form">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </form>
                    </div>
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            )}
        </div>
    );
}

export default CheckOut;