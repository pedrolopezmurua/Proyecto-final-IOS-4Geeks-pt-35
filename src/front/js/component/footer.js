// ./component/footer.js

import React, { useState } from "react";
import logo from "../../img/logo.png";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { WhatsApp } from "./whatsapp";

const popoverStyle = {
	maxHeight: "400px",
	overflow: "auto",
	color: "#4B5B67"
};

const closeButtonStyle = {
	color: "#CD1223"
};

const Footer = () => {
	const [showTerms, setShowTerms] = useState(false);
	const [showAccount, setShowAccount] = useState(false);
	const [showResponsibility, setShowResponsibility] = useState(false);

	const handleClose = (setter) => () => setter(false);

	const handleShow = (setter) => () => setter(true);

	// Popovers
	const popoverTerms = (
		<Popover id="popover-terms" style={popoverStyle}>
			<Popover.Title as="h3" style={closeButtonStyle}>
				Términos y Condiciones
			</Popover.Title>
			<Popover.Content>{/* Contenido de términos y condiciones */}</Popover.Content>
		</Popover>
	);

	const popoverAccount = (
		<Popover id="popover-account" style={popoverStyle}>
			<Popover.Title as="h3" style={closeButtonStyle}>
				Registro y Cuenta
			</Popover.Title>
			<Popover.Content>{/* Contenido de registro y cuenta */}</Popover.Content>
		</Popover>
	);

	const popoverResponsibility = (
		<Popover id="popover-responsibility" style={popoverStyle}>
			<Popover.Title as="h3" style={closeButtonStyle}>
				Responsabilidad
			</Popover.Title>
			<Popover.Content>{/* Contenido de responsabilidad */}</Popover.Content>
		</Popover>
	);

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
						<p>
							Sumérgete en el universo Apple con nosotros, donde la elegancia y
							la innovación convergen y será tu conexión directa con los mejores
							especialistas Apple.
						</p>
					</div>

					<div className="col-md-4">
						<h5 className="border-bottom pb-1 p-3">Legal</h5>
						<div className="row p-2">
							<OverlayTrigger
								trigger="click"
								show={showTerms}
								onHide={handleClose(setShowTerms)}
								placement="right"
								overlay={popoverTerms}
							>
								<a href="#" className="text-secondary">
									Términos y Condiciones
								</a>
							</OverlayTrigger>
						</div>
						<div className="row p-2">
							<OverlayTrigger
								trigger="click"
								show={showAccount}
								onHide={handleClose(setShowAccount)}
								placement="right"
								overlay={popoverAccount}
							>
								<a href="#" className="text-secondary">
									Registro y Cuenta
								</a>
							</OverlayTrigger>
						</div>
						<div className="row p-2">
							<OverlayTrigger
								trigger="click"
								show={showResponsibility}
								onHide={handleClose(setShowResponsibility)}
								placement="right"
								overlay={popoverResponsibility}
							>
								<a href="#" className="text-secondary">
									Responsabilidad
								</a>
							</OverlayTrigger>
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
