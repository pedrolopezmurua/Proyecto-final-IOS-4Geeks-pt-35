import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import detalleVentas from "../../img/detalleVentas.png"

export const DetallesVentas = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (<div>
        {/* Arriba */}
        <div className="text-center mt-5">
            <h1>Macbook Pro m1 13"</h1>
            <h2>Apple Macbook Pro 13" "M1" Gris 8GB RAM 512 GB SSD (2021) Gris Espacial </h2>
            <h3>Valor: $1.250.000-.</h3>
        </div>
        {/* Izquierda */}
        <div className="mx-5 row">
            <div className="col p-5" >
                <h3>Pantalla</h3>
                <ul style={{ listStylePosition: "outside" }} >
                    <li>Pantalla: 13.3" / 2560 x 1600 (WQXGA) / Sin BFR/PVC, sin mercurio, sin berilio, sin arsénico, pantalla Retina, amplia gama de colores P3, tecnología True Tone</li>
                </ul>
                <h3>Procesador</h3>
                <ul style={{ listStylePosition: "outside" }} >
                    <li>Chip Apple M1 con CPU de 8 núcleos y GPU de núcleos</li>
                </ul>
                <h3>Sonido</h3>
                <ul style={{ listStylePosition: "outside" }} >
                    <li>Altavoces estéreo, tres micrófonos</li>
                    <li>Bluetooth 5.0, 802.11a/b/g/n/ac/ax</li>
                </ul>
                <h3>Conexión</h3>
                <ul style={{ listStylePosition: "outside" }} >
                    <li>2 x USB-C 3.1 Gen 2 (compatible con Thunderbolt 3, DisplayPort Alt Mode) (Suministro de energía)Salida de auriculares2 x USB-C 3.1 Gen 2 (compatible con Thunderbolt 3, DisplayPort Alt Mode) (Suministro de energía)Salida de auriculares</li>
                    <li>Conectividad: Wi-Fi Conexión inalámbrica Wi-Fi 6 802.11ax/Compatible con IEEE 802.11a/b/g/n/ac/ Bluetooth /Tecnología inalámbrica Bluetooth 5.0</li>
                </ul>
                <h3>Peso</h3>
                <ul style={{ listStylePosition: "outside" }} >
                    <li>1.4 kilogramos</li>
                </ul>
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
                            <li>Cobertura: Providencia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Abajo */}
        <div className="mx-5">
            <Link to="/ventas">
                <button type="button" className="btn btn-outline-dark mx-5" >Atrás</button>
            </Link>
        </div>
    </div>
    );
};

DetallesVentas.propTypes = {
    match: PropTypes.object
};
