import React, { useState } from "react";

export const SubiendoImagenes = () => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "applegeeks_preset");
        setLoading(true);

        try {

            const resp = await fetch("https://api.cloudinary.com/v1_1/applegeeks/upload",
                {
                    method: "POST",
                    body: data,
                });

            const file = await resp.json();
            console.log(resp)
            setImage(file.secure_url)
            setLoading(false)
        } catch (error) {
            console.error("Error al cargar la imagen: ", error);
            setLoading(false);
        }

    };



    return (
        <div>
            <div className="input-group">
                <input onChange={uploadImage} type="file" className="form-control" id="upload_img" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <button className="btn btn-outline-secondary" type="button" id="upload_img">Button</button>
            </div>
        </div>
    )
}