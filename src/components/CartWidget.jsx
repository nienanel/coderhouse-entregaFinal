import cart from "../assets/cart.svg"
import { Link } from "react-router-dom"

export default function CartWidget() {
    return (
        <div className="cart">
            <Link to="/CartWidget">
                <img src={cart} style={{ width: 30, marginTop: 10 }} alt="" />
            </Link>
        </div>
    )
}