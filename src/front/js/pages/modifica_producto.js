//./pages/modifica_producto.js
import React, { useContext, useState, useEffect, useRef } from "react";
import "../../styles/home.css";
import { SeleccionVariasComunas } from '../component/seleccionVariasComunas';
import { AuthContext } from '../store/authContext';
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { AllRegionesYcomunas } from "../component/regionesYcomunas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ModificaProducto = () => {
    const { actions } = useContext(Context);
    const { userId } = useContext(AuthContext);
    let navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedComunas, setSelectedComunas] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(false);
    const [coberturaSeleccionada, setCoberturaSeleccionada] = useState(false);
    const servicio_id = window.location.pathname.split("/").pop();

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
                setCategoriaSeleccionada(true);
                setCoberturaSeleccionada(true);
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
        //Validaciones
        if (!categoriaSeleccionada) {
            alert("Debes seleccionar una categoría");
        }
        if (categoriaSeleccionada && !coberturaSeleccionada) {
            alert("Debes indicar tu cobertura");
            return;
        }
        if (titulo.length < 5 || titulo.length > 50) {
            alert("El título debe tener entre 5 y 50 caracteres");
            return;
        }

        if (detalle.length < 20 || detalle.length > 1000) {
            alert("La descripción debe tener entre 20 y 1000 caracteres");
            return;
        }
        if (precio_int < 1000) {
            alert("El precio debe ser de al menos $1000")
            return;
        }

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
                actions.getServicios();
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
                    actions.getServicios();
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
            if (region === "") {
                alert("Debes seleccionar al menos una región");
                return;
            }
            if (comuna === "") {
                alert("Debes seleccionar al menos una comuna");
                return;
            }
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
                setComuna("")
                if (region !== "") { setCoberturaSeleccionada(true); }
            }
        };

        const handleRemoveComuna = (index) => {
            const updatedSelectedComunas = selectedComunas.filter((item, i) => i !== index); // Filtra los elementos de selectedComunas y crea un nuevo array sin el elemento en el índice proporcionado
            setSelectedComunas(updatedSelectedComunas); // Actualiza el estado selectedComunas con el nuevo array sin el elemento eliminado
            if (updatedSelectedComunas.length === 0) {
                setCoberturaSeleccionada(false);
            }
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
    };
    const SubirImagenes = () => {
        const [images, setImages] = useState([]);
        const fetchImages = async () => {   //Solicitud GET a nuestra API
            try {
                const url = `http://127.0.0.1:3001/api/imagenes_servicio/${servicio_id}`;
                const opts = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const response = await fetch(url, opts);
                if (response.ok) {
                    const data = await response.json();
                    const imagenData = data.map(imagen => ({
                        id: imagen.id,
                        secure_url: imagen.secure_url
                    }));
                    setImages(imagenData);
                } else {
                    console.error("Error al obtener las imágenes");
                }
            } catch (error) {
                console.error(error);
            }
        };
        useEffect(() => {   //Actualiza el array de imágenes asociadas a este servicio
            fetchImages();
        }, []);
        const deleteImage = async (id) => {     //Solicitud DELETE a nuestra API
            try {
                const url = `http://127.0.0.1:3001/api/imagenes_servicio/${id}`;
                const opts = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const response = await fetch(url, opts);
                if (response.ok) {
                    console.log("Imagen eliminada con éxito");
                    MySwal.fire(
                        'Éxito',
                        'La imagen se eliminó correctamente',
                        'success'
                    )
                    actions.getServicios();
                    fetchImages();
                } else {
                    console.error("Error al eliminar la imagen");
                }
            } catch (error) {
                console.error(error);
            }
        };
        const uploadImage = async (e, servicio_id) => {     //Manejo del archivo que sube el usuario
            const files = e.target.files;   //obtienes la imagen que subió el usuario al input
            const data = new FormData();    //crea un objeto en donde se almacenará la información que se subió 	
            data.append("file", files[0]);  //utiliza un append() para agregar pares clave/valor al objeto FormData; {file: [archivo del usuario], upload_preset: "applegeeks_preset"}
            data.append("upload_preset", "applegeeks_preset");

            try {
                //Solicitud POST a API Cloudinary
                const uploadOpts = {
                    method: "POST",
                    body: data,
                };
                const resp = await fetch("https://api.cloudinary.com/v1_1/applegeeks/image/upload", uploadOpts);
                const file = await resp.json();
                setImages(file.secure_url);
                const secureURL = file.secure_url;

                //Solicitud POST a nuestra API
                const servicio_id = window.location.pathname.split("/").pop();
                const imagenServicioData = {
                    secure_url: secureURL,
                    servicio_id: servicio_id
                };
                const saveOpts = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(imagenServicioData)
                };
                const saveResp = await fetch("http://127.0.0.1:3001/api/imagenes_servicio", saveOpts);
                const nuevaImagenServicio = await saveResp.json();
                MySwal.fire(
                    'Éxito',
                    'La imagen se agregó correctamente',
                    'success'
                )
                actions.getServicios();
                fetchImages();
            } catch (error) {
                console.error("Error al cargar la imagen: ", error);
            }
        };
        return (
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-4 d-flex justify-content-center" id="cuadro-subir-imagenes-izq">
                        <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
                            <i class="fa-solid fa-camera"></i>
                            <p className="m-0">Agrega Imágenes</p>
                            <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                        </div>
                    </div>
                    <div className="col-8">
                        {images.length < 10 && (
                            <div className="col">
                                <input
                                    onChange={uploadImage}
                                    type="file"
                                    className="form-control mb-2"
                                    id="upload_img"
                                    aria-label="Upload image"
                                />
                            </div>
                        )}
                    </div>
                    <div className="row">
                        {images && images.length > 0 ?
                            (Array.isArray(images) && images.map((image, index) => (
                                <div className="col-4 position-relative m-3" style={{ width: "300px" }} key={index}>
                                    <div className="" key={index}>
                                        <button type="button" onClick={() => deleteImage(image.id)} className="btn-close position-absolute top-0 start-0 translate-middle"></button>
                                        <img src={image.secure_url} style={{ width: "300px" }} />
                                    </div>
                                </div>
                            ))
                            ) : (<div>No hay imágenes asociadas a esta publicación</div>)}
                    </div>
                </div>
            </div>
        )
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
                                <input type="number" className="form-control" id="precio" placeholder="$40.000.-" required />
                            </div>
                            <div className="row mt-3" id="seleccion-cobertura">
                                <SeleccionaCobertura selectedComunas={selectedComunas} setSelectedComunas={setSelectedComunas} />
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
                {/* Formulario para subir imágenes */}
                <div className="row" id="formulario-imagenes">
                    <SubirImagenes />
                </div>


            </div>

        </div >
    );

};
