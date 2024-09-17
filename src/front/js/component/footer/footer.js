// ./component/footer/footer.js
import React from "react";
import { Link } from "react-router-dom";
import { WhatsApp } from './whatsapp';
import logo from "../../../img/logo.png";

const Footer = () => {
	return (
		<footer className="p-4 mt-5 bg-light text-secondary border-top border-1">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-4">
						<img
							className="mx-auto d-block my-2"
							style={{ width: "150px", height: "60px" }}
							src={logo}
							alt="Apple Geeks Logo"
						/>
						<p className="mt-3">
							Sumérgete en el universo Apple con nosotros, donde la elegancia y
							la innovación convergen y será tu conexión directa con los mejores
							especialistas Apple.
						</p>
					</div>
					<div className="col-md-4">
						<h5 className="border-bottom pb-1 p-3">Legal</h5>
						<div className="row">
							<Link className="nav-link active" style={{ fontSize: '18px' }} aria-current="page" to='/faqterminos'>
								Términos y Condiciones
							</Link>
						</div>
						<div className="row">
							<Link className="nav-link active" style={{ fontSize: '18px' }} aria-current="page" to='/faqregistro'>
								Registro y Cuenta
							</Link>
						</div>
						<div className="row">
							<Link className="nav-link active" style={{ fontSize: '18px' }} aria-current="page" to='/faqresponsabilidad'>
								Responsabilidad
							</Link>
						</div>
					</div>
					<div className="col-md-4">
						<h5 className="border-bottom pb-1 p-3">Contacto</h5>
						<p>Dirección: Av. Manquehue Sur 350, Oficina 110</p>
						<p>Teléfono: (+56) 9 7284 8039</p>
						<p>
							<a href="mailto:4geek@broadcast.cl">info@applegeeks.com</a>
						</p>
						<WhatsApp />
						<br />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
