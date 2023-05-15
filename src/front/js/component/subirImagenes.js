import React, { useState } from "react";

export const SubirImagenes = () => {

    const [image, setImage] = useState("");


    const uploadImage = async (e, servicio_id) => {
        const files = e.target.files;   //obtienes la imagen que subió el usuario en ese input
        const data = new FormData();    //crea un objeto en donde se almacenará la información que se subió; utiliza un append() para agregar pares clave/valor al objeto FormData; {file: [archivo del usuario], upload_preset: "applegeeks_preset"}	
        data.append("file", files[0]);
        data.append("upload_preset", "applegeeks_preset");

        try {
            const uploadOpts = {
                method: "POST",
                body: data,
            };
            const resp = await fetch("https://api.cloudinary.com/v1_1/applegeeks/image/upload", uploadOpts);
            const file = await resp.json();
            setImage(file.secure_url);
            const secureURL = file.secure_url;
            console.log("secure url: ", file.secure_url);
            const servicio_id = window.location.pathname.split("/").pop();

            //Para guardar la imagen en nuestra base de datos
            const imagenServicioData = {
                secure_url: secureURL,
                servicio_id: servicio_id
            };
            console.log(imagenServicioData);
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
        } catch (error) {
            console.error("Error al cargar la imagen: ", error);
        }
    };

    const handleDeleteClick = () => {
        setImage("");
    }


    return (
        <div className="container">
            <div className="input-group">
                <div className="row">
                </div>
                {image && image != ("") && image != undefined ?
                    (<div className="position-relative m-3" style={{ width: "300px" }}>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm align-middle position-absolute top-0 start-100 translate-middle rounded-circle"
                                style={{ width: "30px", height: "30px", fontSize: "12px" }}
                                onClick={handleDeleteClick}><p>X</p></button>
                        </div>
                        <div className="">
                            <img src={image} style={{ width: "300px" }} />
                        </div>
                    </div>
                    ) : (<input
                        onChange={uploadImage}
                        type="file"
                        className="form-control"
                        id="upload_img"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                    />)}
            </div>
        </div>
    )
}