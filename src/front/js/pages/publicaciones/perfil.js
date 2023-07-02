//./pages/publicaciones/perfil.js
import React from "react";
import { Link } from "react-router-dom";
import atras from "../../../img/atras.png";

export const Perfil = () => {

    return (
        <div className="text-center mt-5">
            <h1>Panel de administración</h1>
            <div className="justify-content-center d-flex">
                <Link className="text-decoration-none my-5" to='/crear-publicacion'>
                    <div className="alert alert-primary text-center m-2 p-3" style={{ width: "220px" }}>
                        <i className="fas fa-file-alt"></i>
                        <p className="m-0">Crear Publicación</p>
                        <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                    </div>
                </Link>
                <Link className="text-decoration-none my-5" to='/publicaciones'>
                    <div className="alert alert-primary text-center m-2 p-3" style={{ width: "220px" }}>
                        <i className="fas fa-file-alt"></i>
                        <p className="m-0">Listado de Publicaciones</p>
                        <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                    </div>
                </Link>

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
