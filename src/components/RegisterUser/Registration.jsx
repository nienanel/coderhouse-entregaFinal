import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";


function NewUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            await updateProfile(user, {
                displayName: name
            });
            console.log("Usuario registrado con éxito:", user);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);

            console.log("Usuario ha iniciado sesión con éxito");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="Form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="EmailLogin">Email:</label>
                    <input
                        type="email"
                        id="EmailLogin"
                        name="EmailLogin"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="PasswordLogin">Password:</label>
                    <input
                        type="password"
                        id="PasswordLogin"
                        name="PasswordLogin"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleRegistration}>Register</button>
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default NewUser;


