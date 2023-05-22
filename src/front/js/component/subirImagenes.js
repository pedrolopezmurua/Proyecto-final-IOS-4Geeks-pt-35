import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../store/authContext';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const SubirImagenes = () => {
    let navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const MySwal = withReactContent(Swal);
    const servicio_id = window.location.pathname.split("/").pop();
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
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
                console.log("imagenData: ", imagenData)
                setImages(imagenData);
            } else {
                console.error("Error al obtener las imágenes");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const deleteImage = async (id) => {
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
                fetchImages();
            } else {
                console.error("Error al eliminar la imagen");
            }
        } catch (error) {
            console.error(error);
        }

    };


    const uploadImage = async (e, servicio_id) => {
        const files = e.target.files;   //obtienes la imagen que subió el usuario en ese input
        const data = new FormData();    //crea un objeto en donde se almacenará la información que se subió; utiliza un append() para agregar pares clave/valor al objeto FormData; {file: [archivo del usuario], upload_preset: "applegeeks_preset"}	
        data.append("file", files[0]);
        data.append("upload_preset", "applegeeks_preset");
        console.log("data de uploadImage: ", data)

        try {
            const uploadOpts = {
                method: "POST",
                body: data,
            };
            const resp = await fetch("https://api.cloudinary.com/v1_1/applegeeks/image/upload", uploadOpts);
            const file = await resp.json();
            setImages(file.secure_url);
            const secureURL = file.secure_url;
            console.log("secure url: ", file.secure_url);


            //Para guardar la imagen en nuestra base de datos
            const servicio_id = window.location.pathname.split("/").pop();
            const imagenServicioData = {
                secure_url: secureURL,
                servicio_id: servicio_id
            };
            console.log("imagenServicioData, para el POST a nuestra db: ", imagenServicioData);
            const saveOpts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(imagenServicioData)
            };
            const saveResp = await fetch("http://127.0.0.1:3001/api/imagenes_servicio", saveOpts);
            const nuevaImagenServicio = await saveResp.json();
            console.log("nueva imagen del servicio: ", nuevaImagenServicio);
            fetchImages();
        } catch (error) {
            console.error("Error al cargar la imagen: ", error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
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
    )
}