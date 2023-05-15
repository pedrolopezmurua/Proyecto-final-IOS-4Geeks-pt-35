import "../../styles/home.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../store/authContext'

export const ListadoPublicaciones = () => {
    const { userId } = useContext(AuthContext);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const proveedor_id = userId;
        console.log(proveedor_id);
        const url = `http://127.0.0.1:3001/api/servicios/proveedor?proveedor_id=${proveedor_id}`;
        const opts = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, opts)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setServicios(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [userId])

    const Estado = estado => {
        return estado ? "Vigente" : "No vigente";
    };
    const Categoria = categoria_id => {
        if (categoria_id == 1) return "Ventas"
        if (categoria_id == 2) return "Servicio Técnico"
    }


    return (
        <div className="text-center mt-5">
            <h1>Revisa aquí tus publicaciones</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Detalle</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Cobertura</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map(servicio => (
                        <tr key={servicio.id}>
                            <td>{servicio.titulo}</td>
                            <td>{servicio.detalle}</td>
                            <td>{servicio.precio}</td>
                            <td>{Categoria(servicio.categoria_id)}</td>
                            <td>{servicio.cobertura}</td>
                            <td>{Estado(servicio.estado)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};
