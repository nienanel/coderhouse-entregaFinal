import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./Cart/CartWidget";
import logo from "../assets/logo.png";
import SignIn from "../components/RegisterUser/RegistrationIcon";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className="brand"><img src={logo} width={55} alt="logo" /></NavLink>
            <ul>
                <li><NavLink to="/skiCategory/mountain">Mountain</NavLink></li>
                <li><NavLink  to="/skiCategory/race">Race</NavLink ></li>
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
            </ul>
            <ul>
            <li><SignIn Link to="/SingIn" /></li>
            <li><CartWidget Link to="/Cart" /></li>
            </ul>
            
        </nav>
    )
}


export default NavBar;