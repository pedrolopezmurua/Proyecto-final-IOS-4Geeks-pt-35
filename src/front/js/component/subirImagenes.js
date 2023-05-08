import React, { useState } from "react";

export const SubiendoImagenes = () => {

    const [image, setImage] = useState("");

    const uploadImage = async (e) => {
        const files = e.target.files;   //obtienes la imagen que subió el usuario en ese input
        const data = new FormData();    //crea un objeto en donde se almacenará la información que se subió; utiliza un append() para agregar pares clave/valor al objeto FormData; {file: [archivo del usuario], upload_preset: "applegeeks_preset"}	
        data.append("file", files[0]);
        data.append("upload_preset", "applegeeks_preset");

        try {
            const opts = {
                method: "POST",
                body: data,
            };
            const resp = await fetch("https://api.cloudinary.com/v1_1/applegeeks/image/upload", opts);
            const file = await resp.json();
            console.log("resp: ", resp)
            setImage(file.secure_url)
            console.log("secure url: ", file.secure_url)
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