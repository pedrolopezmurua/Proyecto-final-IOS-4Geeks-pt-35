// ./component/footer.js
import React, { useState } from "react";
import logo from "../../img/logo.png";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { WhatsApp } from './whatsapp';
import 'bootstrap/dist/css/bootstrap.min.css';


const popoverStyle = {
	maxHeight: '400px',
	overflow: 'auto',
	color: '#4B5B67'
};

const closeButtonStyle = {
	color: '#CD1223'
};


const Footer = () => {
	const [showTerms, setShowTerms] = useState(false);
	const [showAccount, setShowAccount] = useState(false);
	const [showResponsibility, setShowResponsibility] = useState(false);

	const handleClose = setter => () => setter(false);

	const handleShow = setter => () => setter(true);

	const popoverTerms = (
		<Popover id="popover-terms" style={popoverStyle}>
			<Popover.Header as="h3">
				Términos y Condiciones
				<button type="button" onClick={handleClose(setShowTerms)} style={closeButtonStyle}>X</button>
			</Popover.Header>
			1- Resumen de términos y condiciones
			APPLE GEEKS es una plataforma tecnológica que sirve de pasarela entre proveedores y usuarios de productos Apple. Los proveedores ofrecen servicios especializados y se conectan con los usuarios interesados a través de nuestra plataforma. Cabe destacar que APPLE GEEKS no realiza transacciones monetarias, simplemente facilitamos el contacto entre las partes interesadas.

			2- Términos y Condiciones
			Para usar la plataforma, tanto el Usuario Proveedor como la Persona Usuaria deben ser legalmente capaces para contratar y deberán registrarse en APPLE GEEKS. Toda interacción a través de la plataforma debe cumplir con las leyes vigentes en Chile.

		</Popover>
	);


	const popoverAccount = (
		<Popover id="popover-account" style={popoverStyle}>
			<Popover.Header as="h3">
				Registro y Cuenta
				<button type="button" onClick={handleClose(setShowAccount)} style={closeButtonStyle}>X</button>
			</Popover.Header>
			1- Registro y Cuenta
			Para publicar servicios, el Usuario Proveedor debe completar el formulario de registro con los datos requeridos de manera exacta, precisa y verdadera, comprometiéndose a mantener estos datos siempre actualizados. APPLE GEEKS se reserva el derecho de solicitar y/o consultar información adicional para verificar la identidad de la Persona Usuaria.
			La cuenta es personal, única e intransferible, no puede ser vendida o cedida a otra persona. La Persona Usuaria es responsable por todas las operaciones realizadas en su cuenta y debe mantener la confidencialidad de su clave de seguridad. En caso de uso no autorizado de su cuenta, el usuario debe notificarlo de manera inmediata a APPLE GEEKS.
			Los usuarios que hayan sido inhabilitados previamente, o que estén incluidos o relacionados con personas incluidas en listas nacionales o internacionales de sanciones, no podrán registrarse en APPLE GEEKS. Además, APPLE GEEKS podrá cancelar un registro ya aceptado en caso de detectar el uso de más de una cuenta, sin generar derecho a resarcimiento.

			2- Privacidad de datos
			APPLE GEEKS se compromete a proteger la privacidad de las Personas Usuarias. Gestionamos de forma responsable la información personal que nos confían y tomamos las medidas necesarias para garantizar su seguridad de acuerdo a las leyes de protección de datos vigentes en Chile.

			3- Sanciones
			Si la Persona Usuaria incumple alguna ley o los Términos y Condiciones de APPLE GEEKS, nos reservamos el derecho de advertir, suspender, restringir o inhabilitar temporal o definitivamente su cuenta, sin perjuicio de otras sanciones que se establezcan en las reglas de uso particulares de los servicios de APPLE GEEKS.

		</Popover>
	);


	const popoverResponsibility = (
		<Popover id="popover-responsibility" style={popoverStyle}>
			<Popover.Header as="h3">
				Responsabilidad
				<button type="button" onClick={handleClose(setShowResponsibility)} style={closeButtonStyle}>X</button>
			</Popover.Header>
			1- Responsabilidad
			APPLE GEEKS actúa solo como plataforma intermediaria que facilita la conexión entre las Personas Usuarias y los Usuarios Proveedores, por tanto, no asume responsabilidad alguna por el contenido, acciones, productos o servicios proporcionados por los Usuarios Proveedores. Cada Usuario Proveedor es responsable único y exclusivo por la calidad, cumplimiento, entrega y cualquier otro aspecto relacionado con los servicios ofrecidos a través de nuestra plataforma.

			2- Propiedad Intelectual
			Todo el contenido presente en APPLE GEEKS, incluyendo pero no limitado a logos, gráficos, textos, imágenes y software es propiedad de APPLE GEEKS o de sus respectivos titulares, y está protegido por las leyes de propiedad intelectual de Chile y tratados internacionales. No se permite la reproducción total o parcial de dicho contenido sin la previa autorización por escrito de APPLE GEEKS o de sus respectivos titulares.

			3- Indemnidad
			El Usuario se compromete a indemnizar y mantener indemne a APPLE GEEKS, sus filiales, empresas del grupo y sus respectivos directores, gerentes, empleados y agentes, de cualquier reclamo, demanda, daño, costo o gasto, incluyendo honorarios razonables de abogados, en que incurra APPLE GEEKS en relación con el uso del sitio web por parte del Usuario, la violación de estos Términos y Condiciones, la violación de cualquier derecho de terceros, o cualquier actividad relacionada con su cuenta de Usuario (incluyendo la conducta negligente o ilícita), por parte del Usuario o cualquier otra persona que acceda al sitio web utilizando su cuenta de Usuario.

		</Popover>
	);

	return (
		<footer className="p-4 mt-5" style={{ borderTop: '1px solid #DBE1E0', backgroundColor: '#DBE1E0', color: '#618290' }}>
			<div className="container">
				<div className="row text-center">

					<div className="col-md-4">
						<img className="" style={{ width: "150px", height: "60px", marginLeft: "100px", marginRight: "120px" }} src={logo} />
						<p className="mt-3">Sumérgete en el universo Apple con nosotros, donde la elegancia y la innovación convergen y será tú conexión directa con los mejores especialistas Apple.</p>
					</div>

					<div className="col-md-4">
						<h5 className="border-bottom border-white pb-1 p-3">Legal</h5>
						<div className="row p-2">
							<OverlayTrigger trigger="click" show={showTerms} onHide={handleClose(setShowTerms)} placement="right" overlay={popoverTerms}>
								<a href="#" style={{ color: "#618290" }}>Términos y Condiciones</a>
							</OverlayTrigger>
						</div>

						<div className="row p-2">
							<OverlayTrigger trigger="click" show={showAccount} onHide={handleClose(setShowAccount)} placement="right" overlay={popoverAccount}>
								<a href="#" style={{ color: "#618290" }}>Registro y Cuenta</a>
							</OverlayTrigger>
						</div>

						<div className="row p-2">
							<OverlayTrigger trigger="click" show={showResponsibility} onHide={handleClose(setShowResponsibility)} placement="right" overlay={popoverResponsibility}>
								<a href="#" style={{ color: "#618290" }}>Responsabilidad</a>
							</OverlayTrigger>
						</div>
					</div>

					<div className="col-md-4">
						<h5 className="border-bottom border-white pb-1 p-3">Contacto</h5>
						<p>Dirección: Av. Manquehue Sur 350, Oficina 110</p>
						<p>Teléfono: (+56) 9 7284 8039</p>
						<p><a href="mailto:4geek@broadcast.cl">info@applegeeks.com</a></p>
						<WhatsApp />   { }<br />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;