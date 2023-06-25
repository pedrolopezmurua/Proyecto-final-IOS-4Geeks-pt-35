// ./pages/login/recuperapassword.js

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useShowPopup } from '../../component/common/popupx';
import atras from "../../../img/atras.png";

function RecuperaPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);

    const {
        showPopupSuccess,
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
                showPopupSuccess('Correo electrónico de recuperación de contraseña enviado')
                setMessage('El correo fue enviado correctamente. Revisa tu bandeja de entrada, te llegará un link para restablecer tu contraseña');
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
        if (!email) {
            showPopupError('Debes ingresar tu correo electrónico')
            return;
        }
        sendPasswordResetEmail();
    };

    return (
        <div className="container" style={{ marginTop: '200px', marginBottom: '400px' }}>
            <h2 className="text-center mb-4">Restablecer contraseña</h2>
            <form onSubmit={handleSubmit} className="mx-auto col-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" maxLength="100" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
                {message && <p className="text-center">{message}</p>}
            </form>
            <div className="d-flex justify-content-between align-items-center mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="d-flex align-items-center">
                    <Link className="d-flex align-items-center" to="/login" style={{ textDecorationLine: "none", color: "black" }}>
                        <img src={atras} alt="Atras" /><p className="mb-0 ml-2">Atras</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RecuperaPassword;
