import React from "react";
import { Link } from "react-router-dom";
import ventas from ".//../../img/ventas.webp"
import sTec from ".//../../img/sTec.jpg"
import producto from ".//../../img/producto.jpeg"

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

export const CardCategoriaVentas = () => {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src={ventas} className="card-img-top" alt="..." style={{ height: "192px" }} />
            <div className="card-body">
                <h5 className="card-title">Ventas</h5>
                <Link to="/ventas">
                    <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Entrar</button>
                </Link>
            </div>
        </div>
    );
};

export const CardProductosVenta = () => {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <h5 className="card-title m-3">Macbook M1 13"</h5>
            <div style={{ objectFit: "cover" }}>
                <img src={producto} className="card-img-top" alt="..." style={{ height: "192px" }} />
            </div>
            <div className="card-body">
                <p className="fs-5 m-0">Valor</p>
                <p className="fs-5 m-0">1.250.000</p>
                <Link to="/ventas">
                    <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Detalles</button>
                </Link>
            </div>
        </div>
    );
};

export const CardServiciosTecnicos = () => {
    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <h5 className="card-title m-3">Mantención Macbook</h5>
            <div style={{ objectFit: "cover" }}>
                <img src={sTec} className="card-img-top" alt="..." style={{ height: "192px" }} />
            </div>
            <div className="card-body">
                <p className="fs-5 m-0">Valor</p>
                <p className="fs-5 m-0">50.000</p>
                <Link to="/serviciotecnico">
                    <button className="btn btn-dark m-2" style={{ width: "10rem" }}>Detalles</button>
                </Link>
            </div>
        </div>
    );
};