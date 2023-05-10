import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardCategoriaSTec } from "../component/cards";
import { CardCategoriaProductos } from "../component/cards";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<p>
				<img className="m-5" style={{ width: "1113px", height: "561px", left: "151px", top: "193px" }} src={dispositivos} />
			</p>
			<h1>Categorías</h1>
			<div className="justify-content-center d-flex">
				<CardCategoriaProductos />
				<CardCategoriaSTec />
			</div>
		</div>
	);
};
