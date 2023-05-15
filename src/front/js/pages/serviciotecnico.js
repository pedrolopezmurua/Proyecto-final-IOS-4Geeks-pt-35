import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardCategoriaSTec } from "../component/cards";
import { CardCategoriaVentas } from "../component/cards";
import { CardServiciosTecnicos } from "../component/cards";

export const ServicioTecnico = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <p>
                <img className="m-5" style={{ width: "1113px", height: "561px", left: "151px", top: "193px" }} src={dispositivos} />
            </p>
            <h1>Servicio Técnico</h1>
            <div className="justify-content-center d-flex">
                <CardServiciosTecnicos />

            </div>
        </div>
    );
};