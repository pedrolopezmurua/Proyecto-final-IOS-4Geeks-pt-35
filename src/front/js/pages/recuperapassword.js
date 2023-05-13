// ./pages/recuperapassword.js

import React, { useState } from 'react';

function RecuperaPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const sendPasswordResetEmail = async () => {
        try {
            const response = await fetch('http:localhost:3001/sendPasswordResetEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Correo electrónico de recuperación de contraseña enviado');
            } else {
                setMessage('Hubo un error al enviar el correo electrónico de recuperación de contraseña');
            }
        } catch (error) {
            setMessage('Hubo un error al enviar el correo electrónico de recuperación de contraseña');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendPasswordResetEmail();
    };

    return (
        <div className="container" style={{ marginTop: '75px' }}>
            <h2 className="text-center mb-4">Restablecer contraseña</h2>
            <form onSubmit={handleSubmit} className="mx-auto col-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" maxLength="100" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default RecuperaPassword;
