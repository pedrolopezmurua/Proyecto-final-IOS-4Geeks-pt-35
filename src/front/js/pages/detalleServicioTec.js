import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from 'react-bootstrap/Carousel';
import noimage from './/../../img/noimage.png'

export const DetallesServicioTec = props => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const [detalleServicioTec, setDetalleServicioTec] = useState({});
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/servicios/" + id)
            .then(response => response.json())
            .then(data => setDetalleServicioTec(data))
            .catch(error => console.log(error))
    }, [id]);

    useEffect(() => {
        const imagenesServicio = Array.isArray(store.imagenes) && store.imagenes.filter((img) => img.servicio_id === detalleServicioTec.id);
        setImagenes(imagenesServicio);
    }, [store.imagenes, detalleServicioTec.id]);

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
                    <div className="justify-content-center d-flex mt-5">
                        <div className="text-center" style={{ height: "400px", width: "400px", overflow: "hidden" }}>
                            {imagenes?.length > 0 ? (
                                <Carousel variant="dark">
                                    {Array.isArray(imagenes) && imagenes.map((imagen, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="mx-auto"
                                                src={imagen.secure_url}
                                                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                                alt={`Carousel${index + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : (
                                <img
                                    className="mx-auto"
                                    src={noimage}
                                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                    alt=""
                                />
                            )}
                        </div>
                    </div>

                    <div className="row p-4 ">
                        <div className="col-4">
                            <h3>Contacto</h3>
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
                <Link to="/serviciotecnico">
                    <button type="button" className="btn btn-outline-dark mx-5">Atrás</button>
                </Link>
            </div>
        </div >
    );
};

DetallesServicioTec.propTypes = {
    match: PropTypes.object
};
