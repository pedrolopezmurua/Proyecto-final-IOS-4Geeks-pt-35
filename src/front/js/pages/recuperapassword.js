// ./pages/recuperapassword.js

import React, { useState } from 'react';
import { useShowPopup } from '../component/popupx';

function RecuperaPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);

    const {
        showPopupInfo,
        showPopupError,
    } = useShowPopup();

    const sendPasswordResetEmail = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3001/api/sendResetEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                MySwal.fire(
                    'Éxito',
                    'Correo electrónico de recuperación de contraseña enviado',
                    'success'
                )
                setMessage('Correo electrónico de recuperación de contraseña enviado');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            showPopupError('Hubo un error al enviar el correo electrónico de recuperación de contraseña');
            setMessage('Hubo un error al enviar el correo electrónico de recuperación de contraseña');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendPasswordResetEmail();
    };

    return (
        <div className="container" style={{ marginTop: '200px', marginBottom: '400px' }}>
            <h2 className="text-center mb-4">Restablecer contraseña</h2>
            <form onSubmit={handleSubmit} className="mx-auto col-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" maxLength="100" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
                {message && <p className="text-center">{message}</p>}
            </form>
        </div>
    );
}

export default RecuperaPassword;
