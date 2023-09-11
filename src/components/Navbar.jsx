import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="brand"><img src={logo} width={55} alt="logo" /></Link>
            <ul>
                <li><Link to="/skiCategory/Mountain">Mountain</Link></li>
                <li><Link to="/skiCategory/Race">Race</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
            <CartWidget Link to="/CartWidget" />
        </nav>
    )
}


export default NavBar;