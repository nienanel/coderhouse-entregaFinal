export const handleNameChange = (setName, e) => {
    setName(e.target.files[0].name);
};

export const handleEmailChange = (setEmail, e) => {
    setEmail(e.target.value);
};

export const handleSubmit = (name, email) => {
    // Lógica para manejar el envío del formulario
    console.log("Nombre: " + name);
    console.log("Email: " + email);
};