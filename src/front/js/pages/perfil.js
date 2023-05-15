import "../../styles/home.css";
import React from "react";
import { Link } from "react-router-dom";

export const Perfil = () => {

    return (
        <div className="text-center mt-5">
            <h1>Panel de administración</h1>
            <div className="justify-content-center d-flex">
                <Link className="text-decoration-none" to='/registro_servicio'>
                    <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
                        <i className="fas fa-file-alt"></i>
                        <p className="m-0">Crear Publicación</p>
                        <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                    </div>
                </Link>

            </div>
        </div>
    );
};
