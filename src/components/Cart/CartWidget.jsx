import carticon from "../../assets/carticon.svg"
import { Link } from "react-router-dom"
import { useCart } from './CartContext';
import { BsFillCartFill } from 'react-icons/bs';

export default function CartWidget() {
    const { cart } = useCart();
    return (
        <div className="cart">
            <Link to="/Cart">
                {cart.length > 0 ? <BsFillCartFill style={{ width: 35, marginTop: 0, height: 30, color: "#F1ED0E" }} /> : <img src={carticon} style={{ width: 35, marginTop: 5 }} alt="" />}
            </Link>
        </div>
    )
}