import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import detalleVentas from "../../img/detalleVentas.png"

export const DetallesProducto = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (<div>
        {/* Arriba */}
        <div className="text-center mt-5">
            <h2>Apple Macbook Pro 13" "M1" Gris 8GB RAM 512 GB SSD (2021) Gris Espacial </h2>
            <h3>Valor: $1.250.000-.</h3>
        </div>
        {/* Izquierda */}
        <div className="mx-5 row">
            <div className="col p-5" >
                <h3>Descripción</h3>
                <p>blablabla</p>
            </div>
            {/* Derecha */}
            <div className="col">
                <div className="text-center mt-5">
                    <img src={detalleVentas} style={{ height: "400px" }} />
                </div>
                <div className="row p-5">
                    <div className="col-4">
                        <h3 className="mx-5" style={{ marginTop: "25px" }}>Contacto</h3>
                    </div>
                    <div className="col">
                        <ul style={{ listStylePosition: "outside" }} >
                            <li>Nombre: Pedro Pascal</li>
                            <li>Correo: pedro@pascal.com</li>
                            <li>Telefono: +56 9 7799 4555</li>
                            <li>Región: Metropolitana</li>
                            <li>Cobertura: Providencia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Abajo */}
        <div className="mx-5">
            <Link to="/productos">
                <button type="button" className="btn btn-outline-dark mx-5" >Atrás</button>
            </Link>
        </div>
    </div>
    );
};

DetallesProducto.propTypes = {
    match: PropTypes.object
};
