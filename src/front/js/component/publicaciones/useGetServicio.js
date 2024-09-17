// ./component/publicaciones/useGetServicio.js
import { useState, useEffect } from "react";

export const useGetServicio = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const servicio_id = window.location.pathname.split("/").pop();

    useEffect(() => {
        fetch(`http://127.0.0.1:3001/api/servicios/${servicio_id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};
