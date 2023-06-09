// ./pages/crearproveedor.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShowPopup } from '../component/popupx';
import { ValidaRut } from '../component/validarut';
import { Direccion_proveedor } from '../component/direccion_proveedor_function'

const CrearProveedor = () => {

    let navigate = useNavigate();

    const {
        showPopupInfo,
        showPopupError,
        showPopupCreated,
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

        if (!formValues.rut) {
            showPopupError('Debes ingresar tu rut')
            return
        }
        if (formValues.rut && !formValues.nombre) {
            showPopupError('Debes ingresar tu nombre')
            return
        }
        if (formValues.rut && formValues.nombre && !formValues.apellido) {
            showPopupError('Debes ingresar tu apellido')
            return
        }
        if (formValues.rut && formValues.nombre && formValues.apellido && !formValues.direccion) {
            showPopupError('Debes ingresar tu dirección')
            return
        }
        // Validar que las contraseñas sean iguales
        if (formValues.contrasena !== formValues['confirm-password']) {
            showPopupError('Las contraseñas no coinciden');
            return;
        }
        // Validar que la contraseña tenga más de 3 caracteres
        if (formValues.contrasena.length < 4) {
            showPopupError('La contraseña debe tener al menos 4 caracteres');
            return;
        }
        // Validar el nombre
        if (formValues.nombre.length < 3 || formValues.nombre.length > 100) {
            showPopupError('El nombre debe tener entre 3 y 100 caracteres');
            return;
        }
        // Validar el apellido
        if (formValues.apellido.length < 3 || formValues.apellido.length > 100) {
            showPopupError('El apellido debe tener entre 3 y 100 caracteres');
            return;
        }
        // Validar la dirección
        if (formValues.direccion.length < 3 || formValues.direccion.length > 200) {
            showPopupError('La dirección debe tener entre 3 y 200 caracteres');
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
                <div className="card-header bg-dark-subtle text-black">Datos Personales</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="rut">Rut:</label>
                            <ValidaRut rutInicial={formValues.rut} onChange={(formattedRut) => setFormValues({ ...formValues, rut: formattedRut })} />
                        </div>
                        <div className="col">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" minLength={3} maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" className="form-control" id="apellido" minLength={3} maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-dark-subtle text-black">Datos de Dirección</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <Direccion_proveedor />
                        <div className="form-group">
                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" className="form-control" id="direccion" style={{ width: '600px' }} minLength={3} maxLength={200} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-dark-subtle text-black">Datos de Contacto</div>
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
                <div className="card-header bg-dark-subtle text-black">Datos de Cuenta</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="correo">Email:</label>
                            <input type="email" className="form-control" id="correo" style={{ width: '300px' }} minLength={3} maxLength={100} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="contrasena">Ingrese Contraseña:</label>
                            <input type="password" className="form-control" id="contrasena" style={{ width: '300px' }} minLength={3} maxLength={100} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="confirm-password">Confirmación de Contraseña:</label>
                            <input type="password" className="form-control" id="confirm-password" style={{ width: '300px' }} minLength={3} maxLength={20} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-success mx-2" onClick={handleSubmit}>
                    Crear
                </button>
                <button className="btn btn-dark shadow" onClick={handleCancel}>Cancelar</button>
            </div>
        </div >
    );
};

export default CrearProveedor;
