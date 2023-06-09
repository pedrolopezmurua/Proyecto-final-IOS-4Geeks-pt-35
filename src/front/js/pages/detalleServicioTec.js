import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from 'react-bootstrap/Carousel';
import noimage from './/../../img/noimage.png'
import atras from "../../img/atras.png";

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



    const Cobertura = () => {
        const coberturaData = detalleServicioTec.cobertura && JSON.parse(detalleServicioTec.cobertura);
        console.log(coberturaData)
        const cobertura = Array.isArray(coberturaData) && coberturaData.map((item, index) => {
            const region = item.region;
            const comunas = item.comunas.join(", ");

            if (region === "Todo Chile") {
                return (
                    <span key={index}>Todo Chile</span>

                )
            } else {

                return (
                    <div key={index}>
                        <span>{`${region}: ${comunas}. `}</span>
                    </div>);
            }
        });

        return (
            <span>
                {cobertura ? cobertura : <span>No hay datos de cobertura</span>}
            </span>
        );
    };




    return (
        <div>
            {/* Arriba */}
            <div className="text-center mt-5">
                <h2>{detalleServicioTec.titulo}</h2>
                <h3>Precio: {`$${detalleServicioTec?.precio?.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}</h3>
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
                        <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
                            {imagenes?.length > 0 ? (
                                <Carousel variant="dark">
                                    {Array.isArray(imagenes) && imagenes.map((imagen, index) => (
                                        <Carousel.Item key={index}>
                                            <div className="text-center" style={{ height: "400px", width: "100%", overflow: "hidden" }}>
                                                <img
                                                    className="mx-auto"
                                                    src={imagen.secure_url}
                                                    style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
                                                    alt={`Carousel${index + 1}`}
                                                />
                                            </div>

                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : (
                                <img
                                    className="mx-auto"
                                    src={noimage}
                                    style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
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
                                    <li>Cobertura: {Cobertura(detalleServicioTec)}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="d-flex align-items-center">
                    <Link className="d-flex align-items-center" to="/serviciotecnico/" style={{ textDecorationLine: "none", color: "black" }}>
                        <img src={atras} alt="Atras" /><p className="mb-0 ml-2">Atras</p>
                    </Link>
                </div>
            </div>
        </div >
    );
};

DetallesServicioTec.propTypes = {
    match: PropTypes.object
};
