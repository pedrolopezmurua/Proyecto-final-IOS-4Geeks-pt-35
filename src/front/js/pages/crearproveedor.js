// ./pages/crearproveedor.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearProveedor = () => {

    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        rut: '',
        nombre: '',
        apellido: '',
        region: '',
        comuna: '',
        direccion: '',
        telefono: '',
        red_social: '',
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
            alert('Las contraseñas no coinciden');
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
                alert('Éxito en crear el proveedor');
                navigate('/');  // Redirige a la página de inicio
            } else {
                console.error('Error al enviar los datos:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
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
                            <input type="text" className="form-control" id="rut" maxLength={12} style={{ width: '150px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" maxLength={100} style={{ width: '300px' }} onChange={handleChange} />
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
                    <div className="form-group">
                        <label htmlFor="ciudad">Ciudad:</label>
                        <input type="text" className="form-control" id="ciudad" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comuna">Comuna:</label>
                        <input type="text" className="form-control" id="comuna" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" className="form-control" id="direccion" maxLength={100} style={{ width: '600px' }} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Contacto</div>
                <div className="card-body">
                    <div className="form-group row mx-0">
                        <div className="col">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="tel" className="form-control" id="telefono" maxLength={50} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="red_social">Red Social:</label>
                        <input type="text" className="form-control" id="red_social" maxLength={100} style={{ width: '600px' }} onChange={handleChange} />
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
                            <input type="password" className="form-control" id="contrasena" maxLength={8} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="confirm-password">Confirmación de Contraseña:</label>
                            <input type="password" className="form-control" id="confirm-password" maxLength={8} style={{ width: '300px' }} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                    Crear
                </button>
                <button className="btn btn-secondary">Cancelar</button>
            </div>
        </div >
    );
};

export default CrearProveedor;
