import React from 'react';

const CrearProveedor = () => {
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h4>Creación de Cuenta</h4>
            <h5>Datos de Proveedor</h5>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos Personales</div>
                <div className="card-body">
                    <div className="form-inline">
                        <div className="form-group mr-2">
                            <label htmlFor="rut">Rut:</label>
                            <input type="text" className="form-control" id="rut" maxLength={12} style={{ width: '100px' }} />
                        </div>
                        <div className="form-group row mx-0">
                            <div className="col">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" maxLength={20} style={{ width: '150px' }} />
                            </div>
                            <div className="col">
                                <label htmlFor="apellido">Apellido:</label>
                                <input type="text" className="form-control" id="apellido" maxLength={20} style={{ width: '150px' }} />
                            </div>
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
                        <input type="text" className="form-control" id="direccion" maxLength={20} style={{ width: '300px' }} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Contacto</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" className="form-control" id="telefono" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="red-social">Red Social:</label>
                        <input type="text" className="form-control" id="red-social" maxLength={20} style={{ width: '300px' }} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-primary text-white">Datos de Cuenta</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="usuario">Nombre Usuario:</label>
                        <input type="text" className="form-control" id="usuario" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Ingrese Contraseña:</label>
                        <input type="password" className="form-control" id="password" maxLength={20} style={{ width: '300px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmación de Contraseña:</label>
                        <input type="password" className="form-control" id="confirm-password" maxLength={20} style={{ width: '300px' }} />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary mx-2">Crear</button>
                <button className="btn btn-secondary">Cancelar</button>
            </div>
        </div >

    );
};

export default CrearProveedor;
