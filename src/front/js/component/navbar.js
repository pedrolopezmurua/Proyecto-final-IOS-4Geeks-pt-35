import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


export const Navbar = () => {
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
							<Link className="text-decoration-none" to='/' style={{ color: '#18A0FB', fontSize: '18px' }}>Soporte</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container d-flex justify-content-end mx-2">
				<Link className="btn btn-outline-info mx-2" to="/login">Ingreso proveedor</Link>
				<Link className="btn btn-outline-info" to="/crearproveedor">Registro proveedor</Link>
			</div>
		</nav>
	);
};