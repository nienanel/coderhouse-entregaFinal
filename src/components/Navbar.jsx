import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./Cart/CartWidget";
import logo from "../assets/logo.png";
import SingIn from "./SignIn";

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="brand"><img src={logo} width={55} alt="logo" /></Link>
            <ul>
                <li><Link to="/skiCategory/Mountain">Mountain</Link></li>
                <li><Link to="/skiCategory/Race">Race</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
            <ul>
            <li><SignIn Link to="/SingIn" /></li>
            <li><CartWidget Link to="/CartWidget" /></li>
            </ul>
            
        </nav>
    )
}


export default NavBar;