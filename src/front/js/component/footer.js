// ./component/footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => (
	<footer
		className="footer mt-auto py-3 text-center"
		style={{ backgroundColor: "#333", color: "#fff" }}
	>
		<div>
			<p>© {new Date().getFullYear()} Apple Geeks, Tu Tienda de Mac</p>
			<p>
				Visita <a href="https://www.apple.com/mac/">Apple Mac</a> para conocer más sobre los productos Mac.
			</p>
		</div>

		<div style={{ position: "absolute", bottom: 10, right: 10, display: "flex" }}>
			<a href="https://www.facebook.com/" style={{ color: "#fff", marginRight: 10 }}>
				<FaFacebook size={24} />
			</a>
			<a href="https://twitter.com/" style={{ color: "#fff", marginRight: 10 }}>
				<FaTwitter size={24} />
			</a>
			<a href="https://www.instagram.com/" style={{ color: "#fff" }}>
				<FaInstagram size={24} />
			</a>
		</div>

		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);

