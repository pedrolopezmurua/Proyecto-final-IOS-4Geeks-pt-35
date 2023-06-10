
import atras from "../../img/atras.png";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from 'react-bootstrap/Carousel';
import noimage from './/../../img/noimage.png'

export function FaqRegistro() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <h1>Registro y Cuenta</h1>

                <p style={{ textAlign: "justify" }}>
                    1. Registro y Cuenta: Para utilizar ciertas funciones del Sitio, es posible que deba registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y de todas las actividades que ocurran en su cuenta. Usted acepta proporcionar información precisa y actualizada al registrarse y mantenerla actualizada en todo momento.
                </p>
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

}