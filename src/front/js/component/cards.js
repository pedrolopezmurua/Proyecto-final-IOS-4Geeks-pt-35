import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ventas from ".//../../img/ventas.webp"
import sTec from ".//../../img/sTec.jpg"
import productoimg from ".//../../img/producto.jpeg"
import { Context } from "../store/appContext";
import noimage from ".//../../img/noimage.png"

export const CardCategoriaSTec = () => {
    return (
        <div className="card m-4 shadow" style={{ width: "18rem" }}>
            <img src={sTec} className="card-img-top" alt="..." style={{ height: "192px", width: "auto" }} />
            <div className="card-body, text-center p-2">
                <h5 className="card-title">Servicio Técnico</h5>
                <Link to="/serviciotecnico">
                    <button className="btn btn-dark m-2 shadow" style={{ width: "10rem" }}>Entrar</button>
                </Link>
            </div>
        </div>
    );
};

export const CardCategoriaProductos = () => {
    return (
        <div className="card m-4 shadow" style={{ width: "18rem" }}>
            <img src={ventas} className="card-img-top" alt="..." style={{ height: "192px", width: "auto" }} />
            <div className="card-body text-center">
                <h5 className="card-title">Productos</h5>
                <Link to="/productos">
                    <button className="btn btn-dark m-2 shadow" style={{ width: "10rem" }}>Entrar</button>
                </Link>
            </div>
        </div>
    );
};



export const CardProductos = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container-fluid row justify-content-center d-flex">
            {Array.isArray(store.productos) && store.productos.map((producto, index) => {
                // Find the corresponding image for the product
                const imagen = Array.isArray(store.imagenes) && store.imagenes.find((img) => img.servicio_id === producto.id);
                console.log(imagen)
                return (
                    <div className="card m-4 shadow" style={{ width: "18rem" }} key={producto.id}>

                        <div style={{ height: "25%" }}>
                            <h5 className="card-title m-3">{producto.titulo}</h5>
                        </div>

                        <div className="justify-content-center d-flex">
                            <div style={{ height: "200px", width: "250px", overflow: "hidden" }}>
                                {imagen ? (
                                    <img src={imagen?.secure_url} className="card-img-top" alt="..." style={{ objectFit: "scale-down", height: "100%", width: "100%" }} />
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
                        <div className="card-body">
                            <p className="fs-5 m-0">Precio {`$${producto.precio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}</p>
                            <Link to={"/productos/detalle/" + producto.id}>
                                <button className="btn btn-dark mt-3 shadow" style={{ width: "10rem" }}>Detalles</button></Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export const CardServiciosTecnicos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid row justify-content-center d-flex">
            {Array.isArray(store.servicioTecnico) && store.servicioTecnico.map((serviciotecnico, index) => {
                // Find the corresponding image for the product
                const imagen = Array.isArray(store.imagenes) && store.imagenes.find((img) => img.servicio_id === serviciotecnico.id);
                console.log(imagen)
                return (
                    <div className="card m-4 shadow" style={{ width: "18rem" }} key={serviciotecnico.id}>
                        <div style={{ height: "25%" }}>
                            <h5 className="card-title m-3">{serviciotecnico.titulo}</h5>
                        </div>
                        <div className="justify-content-center d-flex">
                            <div style={{ height: "200px", width: "250px", overflow: "hidden" }}>
                                {imagen ? (
                                    <img src={imagen?.secure_url} className="card-img-top" alt="..." style={{ objectFit: "scale-down", height: "100%", width: "100%" }} />
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
                        <div className="card-body">
                            <p className="fs-5 m-0">Precio {`$${serviciotecnico.precio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}</p>
                            <Link to={"/serviciotecnico/detalle/" + serviciotecnico.id}>
                                <button className="btn btn-dark mt-3 shadow" style={{ width: "10rem" }}>Detalles</button></Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



