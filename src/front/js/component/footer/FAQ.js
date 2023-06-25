//./pages/FAQ.js
import React from "react";
import { Link } from "react-router-dom";
import atras from "../../../img/atras.png";

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
};
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
};
export function FaqTerminos() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <h1>Términos y Condiciones</h1>
                <p style={{ textAlign: "justify" }}>
                    1. Términos y Condiciones: Estos Términos y Condiciones ("los Términos") establecen los derechos y obligaciones que rigen el uso del sitio web informativo de servicios para dispositivos Apple, así como todos los servicios asociados ofrecidos por nuestra plataforma ("el Sitio"). Al utilizar el Sitio, usted acepta cumplir con estos Términos en su totalidad. Lea detenidamente estos Términos antes de utilizar el Sitio.
                </p>
                <p style={{ textAlign: "justify" }}>
                    2. Aceptación de los Términos: Al acceder y utilizar el Sitio, usted acepta estos Términos en su totalidad y se compromete a cumplir con todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no utilice el Sitio.
                </p>
                <p style={{ textAlign: "justify" }}>
                    3. Propiedad Intelectual: Todos los derechos de propiedad intelectual relacionados con el Sitio, incluyendo, pero no limitado a, textos, gráficos, logotipos, imágenes y software, son propiedad exclusiva de Apple Geeks o de sus proveedores. Está prohibido utilizar, copiar, modificar o distribuir cualquier contenido del Sitio sin el consentimiento expreso por escrito de los propietarios.
                </p>
                <p style={{ textAlign: "justify" }}>
                    4. Uso del Sitio: El Sitio es una plataforma informativa que conecta a los usuarios con proveedores de servicios para dispositivos Apple. No somos responsables de la calidad, precisión o disponibilidad de los servicios ofrecidos por los proveedores. Usted acepta utilizar el Sitio bajo su propio riesgo y liberar a Apple Geeks de cualquier responsabilidad derivada de los servicios proporcionados por los proveedores.
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

};