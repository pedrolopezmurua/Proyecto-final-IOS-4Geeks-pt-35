import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardProductos } from "../component/cards";

export const Productos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <p>
                <img className="m-5" style={{ width: "1113px", height: "561px", left: "151px", top: "193px" }} src={dispositivos} />
            </p>
            <h1>Ventas</h1>
            <div className="justify-content-center d-flex">
                <CardProductos />

            </div>
        </div>
    );
};