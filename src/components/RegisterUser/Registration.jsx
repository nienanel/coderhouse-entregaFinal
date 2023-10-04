import React, { useState } from "react";
import { handleNameChange, handleEmailChange, handleSubmit } from "./RegistrationHelpers";

function NewUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="Form">
            <h2>New User Registration</h2>
            <form onSubmit={(e) => handleSubmit(name, email, e)}>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={name}
                        onChange={(e) => handleNameChange(setName, e)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="email"
                        id="Email"
                        name="Email"
                        value={email}
                        onChange={(e) => handleEmailChange(setEmail, e)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewUser;
