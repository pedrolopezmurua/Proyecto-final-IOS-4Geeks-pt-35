// ./component/subirImagenes.js
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const SubirImagenes = () => {
    const { actions } = useContext(Context);
    const MySwal = withReactContent(Swal);
    const servicio_id = window.location.pathname.split("/").pop();
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
            actions.getImagenes();
            fetchImages();
        } catch (error) {
            console.error("Error al cargar la imagen: ", error);
        }
    };

    return (
        <div className="container my-3">
            <div className="container text-center" id="container-botones-navegacion">
                <div className="row gx-5 my-3" id="botones-navegación">

                    <div className="col">
                        <Link to={`/modificar-publicacion/${servicio_id}`} >
                            <button type="button" className="btn btn-success">Modificar o eliminar esta publicación</button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/publicaciones`} >
                            <button type="button" className="btn btn-success">Volver a todas mis publicaciones</button>
                        </Link>
                    </div>
                </div>
            </div>
            <h1>Agrega imágenes a tu publicación</h1>
            <div className="container border border-secondary p-2" id="contenedor-formulario">
                <hr className="mx-5 my-5" />
                <div className="row justify-content-center align-items-center" id="contenido-formulario">
                    <div className="col-4 d-flex justify-content-center" id="cuadro-agregar-img-izq">
                        <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
                            <i class="fa-solid fa-camera"></i>
                            <p className="m-0">Agregar imágenes</p>
                            <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
                        </div>
                    </div>
                    <div className="col-8" id="input-formulario">
                        <div className="row justify-content-center my-2">
                            <p className="mb-2">Arrastra o busca tus imágenes aquí:</p>
                            {images.length < 10 && (
                                <div className="col">
                                    <input
                                        onChange={uploadImage}
                                        type="file"
                                        className="form-control"
                                        id="upload_img"
                                        aria-label="Upload image"
                                    />
                                </div>
                            )}
                        </div>
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
                <hr className="mx-5 my-5" />
            </div>
        </div>
    )
}