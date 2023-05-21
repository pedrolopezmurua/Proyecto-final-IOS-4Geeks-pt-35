//./pages/modifica_producto.js
import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { SeleccionVariasComunas } from '../component/seleccionVariasComunas';
import { AuthContext } from '../store/authContext'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ModificaProducto = () => {

    let navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const MySwal = withReactContent(Swal);
    const [dataCobertura, setDataCobertura] = useState([]);
    const [coberturaCargada, setCoberturaCargada] = useState(false);


    const [selectedComunas, setSelectedComunas] = useState([]);
    const handleSelectedComunasChange = (comunas) => {
        setSelectedComunas(comunas);
    };

    const servicio_id = window.location.pathname.split("/").pop();

    useEffect(() => {
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
                const parsedCobertura = JSON.parse(data.cobertura)
                setDataCobertura(parsedCobertura);
                setCoberturaCargada(true);
                const categoriaSelect = document.getElementById("categoria");
                categoriaSelect.value = data.categoria_id.toString();
                setSelectedComunas(parsedCobertura);

            })
            .catch(error => {
                console.error(error);
            });
    }, [userId])

    const handleSubmit = (e) => {
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
                navigate("/perfil")
            })
            .catch((error) => {
                console.error(error);
            });

    };

    const CoberturaActual = () => {
        if (!coberturaCargada) {
            return <p>Esperando datos de cobertura...</p>;
        }

        if (Array.isArray(dataCobertura) && dataCobertura.length > 0) {
            return (
                <div>
                    {dataCobertura.map((item, index) => (
                        <div key={index}>
                            <p>
                                {item.region}:{" "}
                                {item.comunas.map((comuna, index) => (
                                    <span key={index}>
                                        {comuna}
                                        {index !== item.comunas.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            );
        } else {
            return <p>No hay datos de cobertura disponibles.</p>;
        }
    };
    const eliminarServicio = (servicio_id) => {
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
                } else {
                    console.log("Error al eliminar el servicio");
                }
            })
            .catch(error => {
                console.error(error);
            });
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
                                <p>Cobertura actual:</p>
                                <CoberturaActual />
                                <p className="mb-1">Para modificar su cobertura:</p>
                                <SeleccionVariasComunas onSelectedComunasChange={handleSelectedComunasChange} />
                            </div>
                            <div className="d-flex justify-content-end me-4">

                                <button type="submit" className="btn btn-primary">Guardar</button>
                                <button type="button" onClick={() => eliminarServicio(servicio_id)} className="btn btn-danger">Eliminar</button>

                            </div>
                        </form>
                    </div>
                </div>
                <hr className="mx-5 my-5" />


            </div>

        </div >
    );

};
