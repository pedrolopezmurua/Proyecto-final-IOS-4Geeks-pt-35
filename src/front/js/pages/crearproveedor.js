// ./pages/crearproveedor.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShowPopup } from '../component/popupx';
import { ValidaRut } from '../component/validarut';
import { ValidaNombre } from '../component/validanombre';

const CrearProveedor = () => {

    let navigate = useNavigate();

    const {
        showPopupInfo,
        showPopupError,
        showPopupErrorLogin
    } = useShowPopup();

    const [formValues, setFormValues] = useState({
        rut: '',
        nombre: '',
        apellido: '',
        region: '',
        comuna: '',
        direccion: '',
        telefono: '+569 ',
        red_social: 'http://',
        correo: '',
        contrasena: '',
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar que las contraseñas sean iguales
        if (formValues.contrasena !== formValues['confirm-password']) {
            showPopupError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/proveedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                console.log('Datos enviados correctamente');
                showPopupCreated(formValues.correo);
                navigate('/');  // Redirige a la página de inicio
            } else {
                showPopupError('Error al enviar los datos: ' + response.statusText)
                console.error('Error al enviar los datos: ', response.statusText);
            }
        } catch (error) {
            showPopupError('Error al enviar los datos: ' + error)
            console.error('Error al enviar los datos:', error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h4>Creación de Cuenta</h4>
            <h5>Datos de Proveedor</h5>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos Personales</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="rut">Rut:</label>
                            <ValidaRut rutInicial={formValues.rut} onChange={(formattedRut) => setFormValues({ ...formValues, rut: formattedRut })} />
                        </div>
                        <div className="col">
                            <label htmlFor="nombre">Nombre:</label>
                            <ValidaNombre nombreInicial={formValues.nombre} onChange={(updatedNombre) => setFormValues({ ...formValues, nombre: updatedNombre })} />
                        </div>
                        <div className="col">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" className="form-control" id="apellido" maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Dirección</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="region">Region:</label>
                            <input type="text" className="form-control" id="region" maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="comuna">Comuna:</label>
                            <input type="text" className="form-control" id="comuna" maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" className="form-control" id="direccion" maxLength={200} style={{ width: '600px' }} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Contacto</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="tel" className="form-control" id="telefono" maxLength={50} style={{ width: '300px' }} value={formValues.telefono} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label htmlFor="red_social">Red Social:</label>
                            <input type="text" className="form-control" id="red_social" maxLength={100} style={{ width: '600px' }} value={formValues.red_social} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Cuenta</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="correo">Email:</label>
                            <input type="email" className="form-control" id="correo" maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="contrasena">Ingrese Contraseña:</label>
                            <input type="password" className="form-control" id="contrasena" maxLength={20} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="confirm-password">Confirmación de Contraseña:</label>
                            <input type="password" className="form-control" id="confirm-password" maxLength={20} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                    Crear
                </button>
                <button className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
            </div>
        </div >
    );
};

export default CrearProveedor;
