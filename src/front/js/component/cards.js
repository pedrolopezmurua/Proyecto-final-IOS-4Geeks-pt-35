import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ventas from ".//../../img/ventas.webp"
import sTec from ".//../../img/sTec.jpg"
import productoimg from ".//../../img/producto.jpeg"
import { Context } from "../store/appContext";

export const CardCategoriaSTec = () => {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src={sTec} className="card-img-top" alt="..." style={{ height: "192px" }} />

            <div className="card-body">
                <h5 className="card-title">Servicio Técnico</h5>
                <Link to="/serviciotecnico">
                    <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Entrar</button>
                </Link>
            </div>
        </div>
    );
};

export const CardCategoriaProductos = () => {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src={ventas} className="card-img-top" alt="..." style={{ height: "192px" }} />
            <div className="card-body">
                <h5 className="card-title">Productos</h5>
                <Link to="/productos">
                    <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Entrar</button>
                </Link>
            </div>
        </div>
    );
};



export const CardProductos = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Fetch images and store them in the state
        actions.getImagenes();
    }, []);

    return (
        <div className="container-fluid row justify-content-center d-flex">
            {Array.isArray(store.productos) && store.productos.map((producto, index) => {
                // Find the corresponding image for the product
                const imagen = Array.isArray(store.imagenes) && store.imagenes.find((img) => img.servicio_id === producto.id);
                console.log(imagen)
                return (
                    <div className="card m-3" style={{ width: "18rem" }} key={producto.id}>
                        <h5 className="card-title m-3">{producto.titulo}</h5>
                        <div style={{ objectFit: "cover" }}>
                            {/* Use the image's URL if available, otherwise use a placeholder */}
                            <img
                                src={imagen.secure_url}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "192px" }}
                            />
                        </div>
                        <div className="card-body">
                            <p className="fs-5 m-0">Precio</p>
                            <p className="fs-5 m-0">{producto.precio}</p>
                            <Link to={"/productos/detalle/" + producto.id}>
                                <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Detalles</button></Link>
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
                return (
                    <div className="card m-3" style={{ width: "18rem" }} key={serviciotecnico.id}>
                        <h5 className="card-title m-3">{serviciotecnico.titulo}</h5>
                        <div style={{ objectFit: "cover" }}>
                            <img src={productoimg} className="card-img-top" alt="..." style={{ height: "192px" }} />
                        </div>
                        <div className="card-body">
                            <p className="fs-5 m-0">Precio</p>
                            <p className="fs-5 m-0">{serviciotecnico.precio}</p>
                            <Link to={"/serviciotecnico/detalle/" + serviciotecnico.id}>
                                <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Detalles</button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};