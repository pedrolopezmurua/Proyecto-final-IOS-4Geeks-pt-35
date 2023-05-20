import "../../styles/home.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../store/authContext'
import { Link } from "react-router-dom";
import atras from "../../img/atras.png";

export const ModificaProducto = () => {
    const { userId } = useContext(AuthContext);
    const [servicios, setServicios] = useState([]);

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

    // const Cobertura = () => {
    //     return servicios ? (
    //         servicios.map((servicio, index) => {
    //             Array.isArray(servicio.cobertura) && servicio.cobertura.map((item, index) => {
    //                 const region = item.region;
    //                 const comunas = item.comuna;
    //                 return <span key={index}>{`${region}: ${comunas}`}</span>
    //             })
    //         })
    //     ) : <span>No hay datos de cobertura</span>
    // }

    const Cobertura = (servicio) => {
        const coberturaData = JSON.parse(servicio.cobertura);
        const cobertura = Array.isArray(coberturaData) && coberturaData.map((item, index) => {
            const region = item.region;
            const comunas = item.comunas.join(", ");

            return <span key={index}>{`${region}: ${comunas}. `}</span>;
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
                            <th>SUBIR FOTOGRAFIA</th>
                            <th>MODIFICAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicios.length > 0 ? (
                            servicios.map((servicio, index) => (
                                <tr key={index}>
                                    <td>{Categoria(servicio.categoria_id)}</td>
                                    <td>{servicio.titulo}</td>
                                    <td>{Estado(servicio.estado)}</td>
                                    <td>{servicio.precio}</td>
                                    <td>{Cobertura(servicio)}</td>
                                    <td>
                                        <Link to={`/subir-imagenes/${servicio.id}`} className="btn btn-success">
                                            Modificar
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                                            Modificar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No hay servicios disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/*atras/siguiente*/}
            <div className="d-flex justify-content-between align-items-center mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="d-flex align-items-center">
                    <img src={atras} alt="Atras" />
                    <p className="mb-0 ml-2">Atras</p>
                </div>
                <button className="btn btn-success btn-sm">Siguiente</button>
            </div>


        </div>
    );
};
