import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardCategoriaSTec } from "../component/cards";
import { CardCategoriaVentas } from "../component/cards";
import { CardServiciosTecnicos } from "../component/cards";
import { Link } from "react-router-dom";
import atras from "../../img/atras.png";

export const ServicioTecnico = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <div className="justify-content-center d-flex mt-3">
                <div style={{ height: "250px", width: "1100px", overflow: "hidden" }}>
                    <img src={dispositivos} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                </div>
            </div>
            <h1 className="mt-4">Servicio Técnico</h1>
            <div className="justify-content-center d-flex">
                <CardServiciosTecnicos />

            </div>
            <div className="d-flex justify-content-between align-items-center mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="d-flex align-items-center">
                    <Link className="d-flex align-items-center" to="/" style={{ textDecorationLine: "none", color: "black" }}>
                        <img src={atras} alt="Atras" /><p className="mb-0 ml-2">Atras</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};