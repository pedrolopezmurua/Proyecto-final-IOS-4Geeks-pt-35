
import atras from "../../img/atras.png";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from 'react-bootstrap/Carousel';
import noimage from './/../../img/noimage.png'

export function FaqResponsabilidad() {

    return (
        <div className='container my-3'>
            <div className='row'>
                <h1>Responsabilidad</h1>

                <p style={{ textAlign: "justify" }}>
                    1. Responsabilidad: Apple Geeks no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente derivado del uso o la imposibilidad de uso del Sitio. No garantizamos la precisión, integridad, puntualidad o confiabilidad de la información contenida en el Sitio.
                </p>

                <p style={{ textAlign: "justify" }}>
                    2. Modificaciones y Terminación: Nos reservamos el derecho de modificar o interrumpir el Sitio, total o parcialmente, en cualquier momento y sin previo aviso. También podemos modificar estos Términos en cualquier momento. Es su responsabilidad revisar periódicamente estos Términos para estar al tanto de cualquier cambio. La continuación del uso del Sitio después de cualquier modificación constituye su aceptación de los nuevos términos.
                </p>

                <p style={{ textAlign: "justify" }}>
                    3. Ley aplicable y jurisdicción: Estos Términos se regirán e interpretarán de acuerdo con las leyes de Chile. Cualquier disputa que surja de estos Términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Chile.
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