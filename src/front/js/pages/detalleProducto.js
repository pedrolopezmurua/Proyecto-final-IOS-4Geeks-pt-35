import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import detalleVentas from "../../img/detalleVentas.png"

export const DetallesProducto = props => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const [detalleProducto, setDetalleProducto] = useState({});
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/servicios/" + id)
            .then(response => response.json())
            .then(data => setDetalleProducto(data))
            .catch(error => console.log(error))
    }, [id]);

    useEffect(() => {
        const imagenServicio = Array.isArray(store.imagenes) && store.imagenes.find((img) => img.servicio_id === detalleProducto.id);
        if (imagenServicio) {
            setImagen(imagenServicio.secure_url);
        }
    }, [store.imagenes, detalleProducto.id]);

    return (
        <div>
            {/* Arriba */}
            <div className="text-center mt-5">
                <h2>{detalleProducto.titulo}</h2>
                <h3>Precio: {detalleProducto.precio}</h3>
            </div>
            {/* Izquierda */}
            <div className="mx-5 row">
                <div className="col p-5">
                    <h3>Descripción</h3>
                    <p>{detalleProducto.detalle}</p>
                </div>
                {/* Derecha */}
                <div className="col">
                    <div className="justify-content-center d-flex mt-5">
                        <div className="text-center" style={{ height: "300px", width: "400px", overflow: "hidden" }}>
                            {imagen && <img src={imagen} style={{ objectFit: "cover", height: "100%", width: "100%" }} alt="Detalle del producto" />}
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-4">
                            <h3 >Contacto</h3>
                        </div>
                        <div className="col">
                            <ul style={{ listStylePosition: "outside" }} >
                                <li>Nombre: {detalleProducto.proveedor?.nombre} </li>
                                <li>Correo: {detalleProducto.proveedor?.correo} </li>
                                <li>Teléfono: {detalleProducto.proveedor?.telefono} </li>
                                {detalleProducto.red_social !== null && (
                                    <li>Red Social: {detalleProducto.proveedor?.red_social}</li>
                                )}
                                {detalleProducto.cobertura !== null && (
                                    <li>Cobertura: {detalleProducto.cobertura}</li>
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

DetallesProducto.propTypes = {
    match: PropTypes.object
};