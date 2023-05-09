import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
				<Link className="btn btn-outline-info mx-2" to="/login">Ingreso proveedor</Link>
				<button className="btn btn-outline-info" type="button">Registro proveedor</button>
			</div>
		</nav>
	);
};