import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardCategoriaSTec } from "../component/cards";
import { CardCategoriaProductos } from "../component/cards";
import Carousel1 from "../../img/Carousel1.png";
import Carousel2 from "../../img/Carousel2.png";
import Carousel3 from "../../img/Carousel3.png";
import Carousel4 from "../../img/Carousel4.png";
import Carousel from 'react-bootstrap/Carousel';
import ReactDOM, { createRoot } from "react-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text center" >
			<div style={{ width: "800px", margin: "0 auto" }}>
				<Carousel variant="dark">
					<Carousel.Item>
						<img
							className="d-block mx-auto"
							src={Carousel1}
							style={{ width: "800px", height: "400px" }}
							alt="Carousel1"
						/>
						<Carousel.Caption>
							<Carousel.Caption>
								<h6 className="p-1" style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>SERVICIO TÉCNICO EXPERTO PARA DISPOSITIVOS APPLE</h6>
								<p style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>Reparación rápida para tus dispositivos.</p>
							</Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block mx-auto"
							src={Carousel2}
							style={{ width: "800px", height: "400px" }}
							alt="Carousel2"
						/>
						<Carousel.Caption>
							<h6 className="p-1" style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>ENCUENTRA EL DISPOSITIVO APPLE PERFECTO</h6>
							<p style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>Ofertas irresistibles en productos Apple</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block mx-auto"
							src={Carousel3}
							style={{ width: "800px", height: "400px" }}
							alt="Carousel3"
						/>
						<Carousel.Caption>
							<h6 className="p-1" style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>SOLUCIONES TÉCNICAS PARA TUS DISPOSITIVOS APPLE</h6>
							<p style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>Expertos en servicio técnico Apple.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block mx-auto"
							src={Carousel4}
							style={{ width: "800px", height: "400px" }}
							alt="Carousel4"
						/>
						<Carousel.Caption>
							<h6 className="p-1" style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}> AMPLIA SELECCIÓN DE PRODUCTOS APPLE</h6>
							<p style={{ fontSize: "14px", color: "#ffffff", background: "rgba(0.3, 0.3, 0.3, 0.3)" }}>Compra y repara: todo en un solo lugar</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="text-center p-3">
				<h1 className="mt-4">Categorías</h1>
			</div>


			<div className="justify-content-center d-flex">
				<CardCategoriaProductos />
				<CardCategoriaSTec />
			</div>
		</div >
	);
};
