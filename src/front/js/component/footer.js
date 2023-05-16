// ./component/footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => (
	<footer className="bg-dark text-white p-4 mt-5" style={{ borderTop: '1px solid #fff' }}>
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<h5 className="border-bottom border-white pb-1 p-3">Nosotros</h5>
					<p className="mt-3">Somos una empresa dedicada a ofrecer las mejores soluciones para nuestros clientes. Nos apasiona nuestra labor y estamos comprometidos con la excelencia en cada uno de nuestros servicios.</p>
				</div>
				<div className="col-md-3">
					<h5 className="border-bottom border-white pb-1 p-3">Déjanos Ayudarte</h5>
					<ul className="list-unstyled mt-3">
						<li><a href="/faqpage" className="text-white">FAQs</a></li>
						<li><a href="#" className="text-white">Soporte técnico</a></li>
						<li><a href="/devolucionespage" className="text-white">Política de devoluciones</a></li>
					</ul>
				</div>
				<div className="col-md-3">
					<h5 className="border-bottom border-white pb-1 p-3">Haz Dinero</h5>
					<ul className="list-unstyled mt-3">
						<li><a href="#" className="text-white">Programa de afiliados</a></li>
						<li><a href="#" className="text-white">Vende con nosotros</a></li>
						<li><a href="#" className="text-white">Programa de beneficios</a></li>
					</ul>
				</div>
				<div className="col-md-3">
					<h5 className="border-bottom border-white pb-1 p-3">Contacto</h5>
					<p className="mt-3">Dirección: Calle Falsa 123<br />
						Teléfono: (123) 456-7890<br />
						Email: info@applegeeks.com
					</p>
				</div>
			</div>
		</div>
		<hr className="my-3" />
		<div className="d-flex justify-content-center mb-4">
			<a href="https://www.facebook.com/" className="text-white me-3">
				<FaFacebook size={24} />
			</a>
			<a href="https://twitter.com/" className="text-white me-3">
				<FaTwitter size={24} />
			</a>
			<a href="https://www.instagram.com/" className="text-white">
				<FaInstagram size={24} />
			</a>
		</div>
		<p className="mb-0 text-center">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com" className="text-white">4Geeks Academy</a>
		</p>
	</footer>
);
