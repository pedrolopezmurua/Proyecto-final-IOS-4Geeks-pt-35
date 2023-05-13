// ./component/navbar.js

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../store/authContext'

export const Navbar = () => {
	const { userName, userId, logOut } = useContext(AuthContext);

	// Comprueba si el usuario está autenticado
	const isAuthenticated = Boolean(userName);

	const handleLogout = () => {
		// Elimina el token y el correo del usuario del almacenamiento local
		localStorage.removeItem('authToken');
		localStorage.removeItem('userEmail');

		// Limpia el estado
		logOut();
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid ms-5">
				<Link className="" to='/'>Logo here...</Link>
				<div className="container d-flex justify-content-start mx-2" >
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item mx-3">
							<Link className="text-decoration-none text-info bg-dark" to='/'>Inicio</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="text-decoration-none text-info bg-dark" to='/'>Servicios</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="text-decoration-none text-info bg-dark" to='/'>Soporte</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="container d-flex justify-content-end mx-2">
				{isAuthenticated ? (
					// Si el usuario está autenticado, muestra estos enlaces
					<>
						<span className="navbar-text mr-3">Bienvenido, {userName} - {userId} </span>
						<Link className="btn btn-outline-info mx-2" to="/profile">Perfil</Link>
						<button className="btn btn-outline-info" onClick={handleLogout}>Cerrar sesión</button>
					</>
				) : (
					// Si el usuario no está autenticado, muestra estos enlaces
					<>
						<Link className="btn btn-outline-info mx-2" to="/login">Ingreso proveedor</Link>
						<Link className="btn btn-outline-info" to="/crearproveedor">Registro proveedor</Link>
					</>
				)}
			</div>
		</nav>
	);
};