import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardProductos } from "../component/cards";

export const Productos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <div className="justify-content-center d-flex mt-3">
                <div style={{ height: "250px", width: "1100px", overflow: "hidden" }}>
                    <img src={dispositivos} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                </div>
            </div>
            <h1 className="mt-4">Productos</h1>
            <div className="justify-content-center d-flex">
                <CardProductos />

            </div>
        </div>
    );
};