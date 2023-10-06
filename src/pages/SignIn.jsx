import React from "react";
import NewUser from "../components/RegisterUser/Registration";
import { useAuth } from "../components/RegisterUser/AuthContext"; 

export default function SignIn() {
    const { login } = useAuth(); 

    const handleLoginAfterRegistration = async (email, password) => {
        try {
            await login(email, password);
        } catch (error) {          
        }
    };

    return (
        <>
            <NewUser onLogin={handleLoginAfterRegistration} /> 
        </>
    );
}

