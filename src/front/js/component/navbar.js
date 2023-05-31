// ./component/navbar.js

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import { AuthContext } from '../store/authContext';
import { useShowPopup } from '../component/popupx';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Navbar = () => {
	const { userName, logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	const {
		showPopupInfo,
		showPopupError,
		showPopupErrorLogin
	} = useShowPopup();

	// Comprueba si el usuario está autenticado
	const isAuthenticated = Boolean(userName);

	const handleLogout = () => {
		MySwal.fire(
			'Éxito',
			'Cierre de sesión exitoso',
			'success'
		);
		// Limpia el estado
		logOut();
		navigate('/');
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light pe-5" style={{ marginBottom: '0' }}>
			<div className="container-fluid ms-5">
				<Link className="" to='/'><img className="" style={{ width: "150px", height: "60px", marginLeft: "100px", marginRight: "120px" }} src={logo} /></Link>

				<div className="container d-flex justify-content-start mx-2 bg-transparent" >
					<ul className="navbar-nav me-auto mb-3 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" style={{ fontSize: '18px' }} aria-current="page" to='/'>
								Inicio
							</Link>
						</li>
						<li className="nav-item dropdown mx-3">
							<a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '18px' }}>
								Servicios
							</a>
							<ul className="dropdown-menu">
								<li><Link className="dropdown-item" to='/productos'>Productos</Link></li>
								<li><Link className="dropdown-item" to='/serviciotecnico'>Servicio Técnico</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<div className="container d-flex justify-content-end mx-2">
				{isAuthenticated ? (
					// Si el usuario está autenticado, muestra estos enlaces
					<>
						<span className="navbar-text mr-3">Bienvenido, {userName} </span>
						<Link className="btn btn-outline-success mx-2" to="/perfil">Panel Administración</Link>
						<button className="btn btn-outline-success me-5" onClick={handleLogout}>Cerrar sesión</button>
					</>
				) : (
					// Si el usuario no está autenticado, muestra estos enlaces
					<>
						<Link className="btn btn-outline-success mx-2" to="/login">Ingreso proveedor</Link>
						<Link className="btn btn-outline-success me-5" to="/crear-proveedor">Registro proveedor</Link>
					</>
				)}
			</div>
		</nav>
	);
};