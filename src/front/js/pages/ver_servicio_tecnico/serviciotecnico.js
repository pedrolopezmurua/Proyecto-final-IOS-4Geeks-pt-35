//./pages/ver_servicio_tecnico/serviciotecnico.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { CardServiciosTecnicos } from "../../component/cards";
import product from "../../../img/product.jpg";
import atras from "../../../img/atras.png";

export const ServicioTecnico = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <div className="justify-content-center d-flex mt-3">
                <div style={{ height: "250px", width: "1100px", overflow: "hidden" }}>
                    <img src={product} style={{ objectFit: "fill", height: "100%", width: "100%" }} />
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