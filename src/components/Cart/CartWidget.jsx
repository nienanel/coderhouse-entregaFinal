import cart from "../../assets/cart.svg"
import { Link } from "react-router-dom"

export default function CartWidget() {
    return (
        <div className="cart">
            <Link to="/Cart">
                <img src={cart} style={{ width: 35, marginTop: 6 }} alt="" />
            </Link>
        </div>
    )
}