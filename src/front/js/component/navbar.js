import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid ms-5">
				<Link className="link-no-underline" to='/'>Logo here...</Link>
				<div className="container d-flex justify-content-start mx-2" >
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item mx-3">
							<Link className="link-no-underline" to='/'>Inicio</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="link-no-underline" to='/'>Servicios</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className="link-no-underline" to='/'>Soporte</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container d-flex justify-content-end mx-2">
				<button class="btn btn-outline-info mx-2" type="button">Ingreso proveedor</button>
				<button class="btn btn-outline-info" type="button">Registro proveedor</button>
			</div>
		</nav>
	);
};