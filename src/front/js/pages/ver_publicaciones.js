//./pages/ver_publicaciones.js
import "../../styles/home.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../store/authContext'
import { Link, useNavigate } from "react-router-dom";
import atras from "../../img/atras.png";

export const VerPublicaciones = () => {
    const { userId } = useContext(AuthContext);
    const [servicios, setServicios] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const proveedor_id = userId;
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

    const Cobertura = (servicio) => {
        const coberturaData = JSON.parse(servicio.cobertura);
        const cobertura = Array.isArray(coberturaData) && coberturaData.map((item, index) => {
            const region = item.region;
            const comunas = item.comunas.join(", ");

            if (region === "Todo Chile") {
                return (
                    <div key={index}>
                        <span>Todo Chile</span>
                    </div>
                )
            } else {

                return (
                    <div key={index}>
                        <span>{`${region}: ${comunas}. `}</span>
                    </div>);
            }
        });

        return (
            <span>
                {cobertura ? cobertura : <span>No hay datos de cobertura</span>}
            </span>
        );
    };



    return (
        <div className="text-center">

            <h1>Modifica un producto</h1>

            <div className="d-flex justify-content-center p-5" style={{ maxWidth: '1500px', margin: '0 auto' }}>
                <table className="table table-striped rounded p-5">
                    <thead>
                        <tr>
                            <th>CATEGORIA</th>
                            <th>NOMBRE SERVICIO</th>
                            <th>ESTADO</th>
                            <th>VALOR</th>
                            <th>COBERTURA</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicios.length > 0 ? (
                            servicios.map((servicio, index) => (
                                <tr key={servicio.id}>
                                    <td>{Categoria(servicio.categoria_id)}</td>
                                    <td>{servicio.titulo}</td>
                                    <td>{Estado(servicio.estado)}</td>
                                    <td>{`$${servicio.precio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}</td>
                                    <td>{Cobertura(servicio)}</td>
                                    <td>
                                        <Link to={`/subir-imagenes/${servicio.id}`} >
                                            <span className="badge bg-success text-wrap me-1 mb-1" style={{ width: "6rem" }}> Ver o Modificar Imágenes</span>
                                        </Link>
                                        <Link to={`/modificar-publicacion/${servicio.id}`} >
                                            <span className="badge bg-success text-wrap" style={{ width: "6rem" }}> Modificar o Eliminar Publicación</span>
                                        </Link>
                                    </td>


                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No hay servicios disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};
