//./pages/publicaciones/modifica_producto.js
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from '../../store/authContext';
import { Context } from "../../store/appContext";
import { useShowPopup } from '../../component/common/popupx';
import { useSeleccionaCobertura } from "../../component/publicaciones/useSeleccionaCobertura";
import { useEliminarPublicacion } from "../../component/publicaciones/useEliminarPublicacion";
import { useGetServicio } from "../../component/publicaciones/useGetServicio";
import atras from "../../../img/atras.png";

export const ModificaProducto = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const { userId } = useContext(AuthContext);
    const { showPopupError, showPopupSuccess } = useShowPopup();
    const { selectedComunas, setSelectedComunas, selectedRegion, region, comuna, RegionesYcomunas, handleRegionChange, handleComunaChange, handleAddComuna, handleRemoveComuna, coberturaSeleccionada, setCoberturaSeleccionada } = useSeleccionaCobertura();
    const { eliminarServicio } = useEliminarPublicacion();
    const { data, loading } = useGetServicio();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(false);
    const servicio_id = window.location.pathname.split("/").pop();

    useEffect(() => {           //Solicitud GET a nuestra API
        if (!loading && data) {
            document.getElementById("tituloPublicacion").value = data.titulo;
            document.getElementById("descripcion").value = data.detalle;
            document.getElementById("precio").value = data.precio;
            const categoriaSelect = document.getElementById("categoria");
            categoriaSelect.value = data.categoria_id.toString();
            const parsedCobertura = JSON.parse(data.cobertura);
            setSelectedComunas(parsedCobertura);
            setCategoriaSeleccionada(true);
            setCoberturaSeleccionada(true);
        }
    }, [data, loading]);

    const handleSubmit = (e) => {   //Solicitud PUT a nuestra API
        e.preventDefault();
        // Obtiene los valores del formulario
        const categoria_select = document.getElementById("categoria");
        const categoria_id = parseInt(categoria_select.value, 10);
        const titulo = document.getElementById("tituloPublicacion").value;
        const detalle = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const precio_int = parseInt(precio, 10);
        const proveedor_id = userId;
        //Validaciones
        if (!categoriaSeleccionada) {
            showPopupError('Debes seleccionar una categoría');
            return;
        };
        if (categoriaSeleccionada && !titulo) {
            showPopupError('Debes indicar el título de tu publicación');
            return;
        };
        if (categoriaSeleccionada && titulo.length < 10 || titulo.length > 100) {
            showPopupError('El título debe tener entre 10 y 100 caracteres');
            return;
        };
        if (categoriaSeleccionada && titulo && !detalle) {
            showPopupError('Debes indicar el detalle de tu publicación');
            return;
        };
        if (categoriaSeleccionada && titulo && detalle.length < 20 || detalle.length > 1500) {
            showPopupError('La descripción debe tener entre 20 y 1500 caracteres');
            return;
        };
        if (categoriaSeleccionada && titulo && !precio) {
            showPopupError('Debes indicar el precio de tu publicación');
            return;
        };
        if (categoriaSeleccionada && titulo && detalle && precio_int < 1000) {
            showPopupError('El precio debe ser de al menos $1.000');
            return;
        };
        if (categoriaSeleccionada && precio && titulo && detalle && !coberturaSeleccionada) {
            showPopupError('Debes indicar la cobertura de tu publicación');
            return;
        };
        // Crea el objeto de datos a enviar
        const data = {
            titulo: titulo,
            detalle: detalle,
            precio: precio_int,
            proveedor_id: proveedor_id,
            categoria_id: categoria_id,
            cobertura: JSON.stringify(selectedComunas),
            estado: true
        };
        // Solicitud PUT tabla Servicio
        fetch(`http://127.0.0.1:3001/api/servicios/${servicio_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                showPopupSuccess('La publicación se modificó correctamente')
                actions.getServicios();
                navigate("/publicaciones")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleEliminarServicio = () => {     //Solicitud DELETE a nuestra API
        eliminarServicio(servicio_id);
    };

    return (
        <div className="container my-3">
            <h1 className="mb-3">Modifica tu publicación</h1>
            <div className="container border border-secondary" id="contenedor-formulario">
                <hr className="mx-5 my-5" />
                <div className="row" id="contenido-formulario">
                    <div className="col-4 d-flex justify-content-center" id="cuadro-crear-servicio-izq">
                        <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
                            <i className="fas fa-file-alt"></i>
                            <p className="m-0">Modificar Publicación</p>
                            <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                        </div>
                    </div>
                    <div className="col-8" id="opciones-formulario">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3" id="seleccion-categoria">
                                <label htmlFor="categoría" className="form-label">Categoría</label>
                                <select defaultValue="0" className="form-select" id="categoria" aria-label="Selecciona una categoría" onChange={(e) => setCategoriaSeleccionada(e.target.value !== "0")}>
                                    <option value="0">Seleccionar</option>
                                    <option value="1">Productos</option>
                                    <option value="2">Servicio técnico</option>
                                </select>
                            </div>
                            <div className="mb-3" id="titulo-publicacion">
                                <label htmlFor="nombre-servicio" className="form-label">Título de la publicación</label>
                                <input type="text" className="form-control" id="tituloPublicacion" placeholder="Ej. Mantención de Macbook" maxLength={100} required />
                            </div>
                            <div className="mb-3" id="descripcion-publicacion">
                                <label htmlFor="descripcion" className="form-label">Descripción detallada</label>
                                <textarea className="form-control" id="descripcion" rows="3" maxLength={3000} required></textarea>
                            </div>
                            <div className="col" id="seleccion-valor-servicio">
                                <label htmlFor="precio" className="form-label" >Precio</label>
                                <input type="number" className="form-control" id="precio" placeholder="40.000" required />
                            </div>
                            <div className="row mt-3" id="seleccion-cobertura">
                                <p className="form-label">Selecciona tu cobertura:</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-5" id="seleccionRegion" style={{ width: '300px' }} >
                                            <label htmlFor="regiones">Región:</label>
                                            <select
                                                id="regiones"
                                                className="form-select mt-1"
                                                value={region}
                                                onChange={handleRegionChange}
                                            >
                                                <option value="">Seleccione una región</option>
                                                {RegionesYcomunas.regiones.map((region, index) => (
                                                    <option key={index} value={region.NombreRegion}>{region.NombreRegion}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-5" id="seleccionComuna" style={{ width: '300px' }} >
                                            <label htmlFor="comunas">Comuna:</label>
                                            <select
                                                id="comunas"
                                                className="form-select mt-1"
                                                value={comuna}
                                                onChange={handleComunaChange}
                                            >
                                                <option value="">Seleccione una comuna</option>
                                                {RegionesYcomunas.regiones.map((region) => {
                                                    if (region.NombreRegion === selectedRegion) {
                                                        return region.comunas.map((comuna, index) => (
                                                            <option key={index} value={comuna}>{comuna}</option>
                                                        ));
                                                    }
                                                    return null;
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex mt-1">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={handleAddComuna}
                                            style={{ width: "75%", fontSize: "75%" }}
                                        >
                                            Agregar comuna</button>
                                    </div>
                                    <div>
                                        <p className="form-label mt-3">Comunas seleccionadas:</p>
                                        <ul>
                                            {selectedComunas.map((item, index) => (
                                                <li key={index}>
                                                    {item.region === "Todo Chile" ? "Todo Chile" : `${item.region}, comuna: `}
                                                    {item.comunas && item.comunas.length > 0
                                                        ? item.comunas.length === 1
                                                            ? item.comunas[0]
                                                            : item.comunas.join(", ")
                                                        : ""}
                                                    <button onClick={() => handleRemoveComuna(index)} type="button" className="btn-close" aria-label="Remove"></button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-start me-4">
                                <Link to={`/subir-imagenes/${servicio_id}`} >
                                    <button type="button" className="btn btn-dark mt-3">Ver imágenes</button>
                                </Link>
                            </div>
                            <hr className="mx-5 my-4" />
                            <div className="row mx-5 d-flex align-items-center justify-content-between">
                                <div className="col d-flex justify-content-between align-items-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    <div className="d-flex align-items-center">
                                        <Link className="d-flex align-items-center mt-3" to="/publicaciones" style={{ textDecorationLine: "none", color: "black" }}>
                                            <img src={atras} alt="Atras" /><p className="mb-0 ml-2">Atras</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-end me-4">
                                    <button type="submit" className="btn btn-dark mt-3 ">Guardar</button>
                                    <button type="button" onClick={() => handleEliminarServicio(servicio_id)} className="btn btn-danger mt-3 ms-1">Eliminar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="mx-5 my-5" />
            </div>
        </div >
    );
};
