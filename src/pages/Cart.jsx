import { useCart } from "../components/Cart/CartContext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity} </p>
                    <p>price: {item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}