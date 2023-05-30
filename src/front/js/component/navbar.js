// ./component/navbar.js

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import { AuthContext } from '../store/authContext';
import { useShowPopup } from '../component/popupx';

export const Navbar = () => {
	const { userName, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		showPopupInfo,
		showPopupError,
		showPopupErrorLogin
	} = useShowPopup();

	// Comprueba si el usuario está autenticado
	const isAuthenticated = Boolean(userName);

	const handleLogout = () => {
		showPopupInfo("Usuario ha cerrado sesión");
		// Limpia el estado
		logOut();
		navigate('/');
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginBottom: '0' }}>
			<div className="container-fluid ms-5">
				<Link className="" to='/'><img className="" style={{ width: "150px", height: "60px", marginLeft: "100px", marginRight: "120px" }} src={logo} /></Link>

				<div className="container d-flex justify-content-start mx-2 bg-transparent" >
					<ul className="navbar-nav me-auto mb-3 mb-lg-0">
						<li className="nav-item mx-3">
							<Link className="text-decoration-none" to='/' style={{ color: '#18A0FB', fontSize: '18px' }}>Inicio</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="text-decoration-none" to='/' style={{ color: '#18A0FB', fontSize: '18px' }}>Servicios</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="text-decoration-none" to='/prueba' style={{ color: '#18A0FB', fontSize: '18px' }}>Soporte</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="container d-flex justify-content-end mx-2">
				{isAuthenticated ? (
					// Si el usuario está autenticado, muestra estos enlaces
					<>
						<span className="navbar-text mr-3">Bienvenido, {userName} </span>
						<Link className="btn btn-outline-info mx-2" to="/perfil">Panel Administración</Link>
						<button className="btn btn-outline-info" onClick={handleLogout}>Cerrar sesión</button>
					</>
				) : (
					// Si el usuario no está autenticado, muestra estos enlaces
					<>
						<Link className="btn btn-outline-info mx-2" to="/login">Ingreso proveedor</Link>
						<Link className="btn btn-outline-info" to="/crear-proveedor">Registro proveedor</Link>
					</>
				)}
			</div>
		</nav>
	);
};