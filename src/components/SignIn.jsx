import React from "react"
import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
export default function SignIn() {

    return (
        <div className="signIn">
            <Link to="/SignIn">
            <BiUserCircle size={40} />
            </Link>
        </div>
    )
}