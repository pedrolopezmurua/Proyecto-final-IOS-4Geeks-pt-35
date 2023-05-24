//./pages/modifica_producto.js
import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { SeleccionVariasComunas } from '../component/seleccionVariasComunas';
import { AuthContext } from '../store/authContext'
import { useNavigate, Link } from "react-router-dom";
import { AllRegionesYcomunas } from "../component/regionesYcomunas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ModificaProducto = () => {

    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const servicio_id = window.location.pathname.split("/").pop();
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedComunas, setSelectedComunas] = useState([]);

    useEffect(() => {       //Solicitud GET a nuestra API
        const url = `http://127.0.0.1:3001/api/servicios/${servicio_id}`;
        const opts = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, opts)
            .then(response => response.json())
            .then(data => {
                document.getElementById("tituloPublicacion").value = data.titulo;
                document.getElementById("descripcion").value = data.detalle;
                document.getElementById("precio").value = data.precio;
                const categoriaSelect = document.getElementById("categoria");
                categoriaSelect.value = data.categoria_id.toString();
                const parsedCobertura = JSON.parse(data.cobertura) //me traigo la cobertura como un objeto en JS
                setSelectedComunas(parsedCobertura);
            })
            .catch(error => {
                console.error(error);
            });
    }, [userId])

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
                MySwal.fire(
                    'Éxito',
                    'La publicación se modificó correctamente',
                    'success'
                )
                navigate("/publicaciones")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const eliminarServicio = (servicio_id) => {     //Solicitud DELETE a nuestra API
        const url = `http://127.0.0.1:3001/api/servicios/${servicio_id}`;
        const opts = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, opts)
            .then(response => {
                if (response.status === 204) {
                    console.log("Servicio eliminado con éxito");
                    MySwal.fire(
                        'Éxito',
                        'La publicación se eliminó correctamente',
                        'success'
                    )
                    navigate("/perfil")
                    navigate("../publicaciones");
                } else if (response.status === 400) {
                    MySwal.fire(
                        'Error',
                        'La publicación no puede ser eliminada ya que tiene imágenes asociadas.',
                        'error'
                    )
                } else {
                    console.log("Error al eliminar el servicio");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const SeleccionaCobertura = () => {
        const RegionesYcomunas = AllRegionesYcomunas;
        const [region, setRegion] = useState("");
        const [comuna, setComuna] = useState("");

        const handleRegionChange = (e) => {
            const selectedRegion = e.target.value;
            setRegion(selectedRegion);
            setComuna("");
            setSelectedRegion(selectedRegion);
        };
        const handleComunaChange = (e) => {
            const selectedComuna = e.target.value;
            setComuna(selectedComuna);
        };
        const handleAddComuna = () => {
            if (selectedComunas && selectedRegion && comuna) {
                const existingRegion = selectedComunas.find(
                    (item) => item.region === selectedRegion
                );
                if (existingRegion) {
                    const updatedComunas = [...existingRegion.comunas, comuna]; // Agregar la comuna al array existente
                    const updatedRegion = {
                        ...existingRegion,
                        comunas: updatedComunas,
                    };
                    const updatedSelectedComunas = selectedComunas.map((item) => {
                        if (item.region === selectedRegion) {
                            return updatedRegion;
                        }
                        return item;
                    });
                    setSelectedComunas(updatedSelectedComunas);
                } else {
                    setSelectedComunas([
                        ...selectedComunas,
                        {
                            region: selectedRegion,
                            comunas: [comuna], // Crear un nuevo array de comunas con la comuna seleccionada
                        },
                    ]);
                }
                setComuna("");
            }
        };
        const handleRemoveComuna = (index) => {
            const updatedSelectedComunas = selectedComunas.filter((item, i) => i !== index);
            setSelectedComunas(updatedSelectedComunas);
        };

        return (
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
                                {item.region}, comuna:{" "}
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
        );
    }

    return (
        <div className="container my-3">
            <h1 className="mb-3">Modifica tu publicación</h1>
            <div className="container border border-secondary" id="contenedor-formulario">
                <hr className="mx-5 my-5" />
                <div className="row" id="contenido-formulario">
                    <div className="col-4 d-flex justify-content-center" id="cuadro-crear-servicio-izq">
                        <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
                            <i className="fas fa-file-alt"></i>
                            <p className="m-0">Crear Publicación</p>
                            <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                        </div>
                    </div>
                    <div className="col-8" id="opciones-formulario">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3" id="seleccion-categoria">
                                <label htmlFor="categoría" className="form-label">Categoría</label>
                                <select defaultValue="0" className="form-select" id="categoria" aria-label="Selecciona una categoría">
                                    <option value="0">Seleccionar</option>
                                    <option value="1">Productos</option>
                                    <option value="2">Servicio técnico</option>
                                </select>
                            </div>
                            <div className="mb-3" id="titulo-publicacion">
                                <label htmlFor="nombre-servicio" className="form-label">Título de la publicación</label>
                                <input type="text" className="form-control" id="tituloPublicacion" placeholder="Ej. Mantención de Macbook" />
                            </div>
                            <div className="mb-3" id="descripcion-publicacion">
                                <label htmlFor="descripcion" className="form-label">Descripción detallada</label>
                                <textarea className="form-control" id="descripcion" rows="3"></textarea>
                            </div>
                            <div className="col" id="seleccion-valor-servicio">
                                <label htmlFor="precio" className="form-label" >Precio</label>
                                <input type="text" className="form-control" id="precio" placeholder="$40.000.-" />
                            </div>
                            <div className="row mt-3" id="seleccion-cobertura">
                                <SeleccionaCobertura />
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-start me-4">
                                    <Link to={`/subir-imagenes/${servicio_id}`} >
                                        <button type="button" className="btn btn-success">Ver imágenes</button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-end me-4">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                    <button type="button" onClick={() => eliminarServicio(servicio_id)} className="btn btn-danger">Eliminar</button>
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
