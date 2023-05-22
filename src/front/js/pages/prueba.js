import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Prueba = () => {
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        mostrarAlerta()
    }, [])
    const mostrarAlerta = () => {
        MySwal.fire(
            'Éxito',
            'La publicación se creó correctamente',
            'success'
        )
    }

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}
