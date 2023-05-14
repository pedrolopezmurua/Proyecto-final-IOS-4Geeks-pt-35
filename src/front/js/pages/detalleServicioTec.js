import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import detalleVentas from "../../img/detalleVentas.png"

export const DetallesServicioTec = props => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const [detalleServicioTec, setDetalleServicioTec] = useState({})

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/servicios/" + id)
            .then(response => response.json())
            .then(data => setDetalleServicioTec(data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            {/* Arriba */}
            <div className="text-center mt-5">
                <h2>{detalleServicioTec.titulo}</h2>
                <h3>Precio: {detalleServicioTec.precio}</h3>
            </div>
            {/* Izquierda */}
            <div className="mx-5 row">
                <div className="col p-5">
                    <h3>Descripción</h3>
                    <p>{detalleServicioTec.detalle}</p>
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
                                <li>Nombre: {detalleServicioTec.proveedor?.nombre} </li>
                                <li>Correo: {detalleServicioTec.proveedor?.correo} </li>
                                <li>Teléfono: {detalleServicioTec.proveedor?.telefono} </li>
                                {detalleServicioTec.red_social !== null && (
                                    <li>Red Social: {detalleServicioTec.proveedor?.red_social}</li>
                                )}
                                {detalleServicioTec.cobertura !== null && (
                                    <li>Cobertura: {detalleServicioTec.cobertura}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Abajo */}
            <div className="mx-5">
                <Link to="/productos">
                    <button type="button" className="btn btn-outline-dark mx-5">Atrás</button>
                </Link>
            </div>
        </div>
    );
};

DetallesServicioTec.propTypes = {
    match: PropTypes.object
};