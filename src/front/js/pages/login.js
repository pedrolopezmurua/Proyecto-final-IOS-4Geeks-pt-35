// ./pages/login.js

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/authContext'
import login from "../../img/login.png";
import { useShowPopup } from '../component/popupx';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
    const { logIn } = useContext(AuthContext);
    const MySwal = withReactContent(Swal);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const isEmailValid = (email) => {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const {
        showPopupInfo,
        showPopupError,
        showPopupErrorLogin
    } = useShowPopup();


    const handleLogin = async () => {
        // Validación del formato de correo electrónico
        if (!isEmailValid(username)) {
            showPopupError('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validación simple: usuario y contraseña no deben estar vacíos
        if (!username.trim() || !password.trim()) {
            showPopupError('Ambos campos, usuario y contraseña, son obligatorios.');
            return;
        }

        // Validación de la longitud mínima de la contraseña
        if (password.length < 3) {
            showPopupError('La contraseña debe tener al menos 3 caracteres.');
            return;
        }

        // Construye los datos del formulario
        const loginData = {
            "correo": username,
            "contrasena": password
        };

        // Envía una solicitud HTTP al servidor
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        // Maneja la respuesta
        if (response.ok) {
            const responseData = await response.json();

            // Almacena el token en el localStorage
            localStorage.setItem('Token', responseData.token);

            logIn(username, responseData.data.id);
            console.error('Inicio de sesión exitoso: ' + responseData);
            MySwal.fire(
                'Éxito',
                'Inicio de sesión exitoso',
                'success'
            )
            navigate('/');

        } else {
            console.error('Error al iniciar sesión:', response.statusText);
            showPopupErrorLogin('No estas registrado. Regístrate como proveedor.');
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div className="container-fluid h-100">
            <div className="row h-100" style={{ marginTop: '75px' }}>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={login} alt="Imagen" style={{ width: '800px', height: '600px' }} />
                </div>
                <div className="col-md-6 my-auto">
                    <h4 className="text-center mb-4">¡Bienvenido Proveedor!</h4>
                    <h5 className="text-center mb-4">Ingrese sus Datos para Acceder al Portal</h5>
                    <form onSubmit={(event) => event.preventDefault()} className="mx-auto col-6">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Usuario:</label>
                            <input type="email" className="form-control" id="username" maxLength="50" value={username} onChange={handleUsernameChange} required />
                            <div className="invalid-feedback">
                                Por favor, ingrese un correo electrónico válido.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="password" minLength="3" maxLength="50" value={password} onChange={handlePasswordChange} required />
                            <div className="invalid-feedback">
                                La contraseña debe tener al menos 3 caracteres.
                            </div>
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-success me-2" onClick={handleLogin}>Ingresar</button>
                            <Link to="/" className="btn btn-dark shadow">Cancelar</Link>
                            <Link to="/recupera-password" className="btn btn-link">¿Olvidaste tu contraseña?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
