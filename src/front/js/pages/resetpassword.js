// ./pages/resetpassword.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword() {
    const { email } = useParams();
    const decodedEmail = atob(email);
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [emailExists, setEmailExists] = useState(true);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const checkEmailExists = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/proveedores/${decodedEmail}`);
                const data = await response.json();
                setEmailExists(data.existe);
            } catch (error) {
                console.error('Error al validar el correo electrónico:', error);
                setEmailExists(false);
            }
        };

        checkEmailExists();
    }, [decodedEmail]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordsMatch(e.target.value === confirmation);
    };

    const handleConfirmationChange = (e) => {
        setConfirmation(e.target.value);
        setPasswordsMatch(e.target.value === password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailExists) {
            if (password === confirmation) {
                fetch('http://localhost:3001/api/proveedores/update-password', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        correo: decodedEmail,
                        contrasena: password,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (response.ok) {
                            console.log('Contraseña actualizada exitosamente');
                            setPasswordUpdated(true);
                            setError('');
                        } else {
                            console.log('Error al actualizar la contraseña');
                            setError('Error al actualizar la contraseña');
                        }
                    })
                    .catch((error) => {
                        console.error('Error al actualizar la contraseña:', error);
                        setError('Error al actualizar la contraseña');
                    });
            } else {
                console.log('La contraseña y la confirmación no coinciden');
                setError('La contraseña y la confirmación no coinciden');
            }
        } else {
            console.log('El correo no existe en la tabla "proveedor"');
            setError(`El correo ${decodedEmail} no existe en la tabla "proveedor"`);
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ marginTop: '300px', marginBottom: '500px' }}>
            {!emailExists && <div className="alert alert-danger">El correo {decodedEmail} no existe en el sistema</div>}
            {emailExists && (
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo electrónico:
                            </label>
                            <input type="email" id="email" className="form-control" value={decodedEmail} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Nueva contraseña:
                            </label>
                            <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} required disabled={passwordUpdated} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmation" className="form-label">
                                Confirmar contraseña:
                            </label>
                            <input type="password" id="confirmation" className="form-control" value={confirmation} onChange={handleConfirmationChange} required disabled={passwordUpdated} />
                            {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!passwordsMatch || passwordUpdated}>
                            Resetear contraseña
                        </button>
                        {passwordUpdated && <p className="text-success mt-3">La contraseña ha sido actualizada exitosamente.</p>}
                        {error && <p className="text-danger mt-3">{error}</p>}
                    </form>
                </div>
            )}
        </div>
    );
}

export default ResetPassword;
