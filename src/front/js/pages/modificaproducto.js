import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import dispositivos from "../../img/dispositivos.jpg";
import "../../styles/home.css";
import { CardCategoriaSTec } from "../component/cards";
import { CardCategoriaProductos } from "../component/cards";
import atras from "../../img/atras.png";
import banner from "../../img/banner.png";


export const ModificaProducto = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <p>
                <img className="m-5" style={{ width: "1113px", height: "250px", left: "151px", top: "193px" }} src={banner} />
            </p>
            <h1>Modifica un producto</h1>

            {/*tabla*/}

            <div className="d-flex justify-content-center p-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <table className="table table-striped rounded p-5">
                    <thead>
                        <tr>
                            <th>CATEGORIA</th>
                            <th>NOMBRE SERVICIO</th>
                            <th>ESTADO</th>
                            <th>VALOR</th>
                            <th>COBERTURA</th>
                            <th>MODIFICAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td><button type="button" className="btn btn-success" data-bs-dismiss="modal">Modificar</button></td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td><button type="button" className="btn btn-success" data-bs-dismiss="modal">Modificar</button></td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td><button type="button" className="btn btn-success" data-bs-dismiss="modal">Modificar</button></td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td><button type="button" className="btn btn-success" data-bs-dismiss="modal">Modificar</button></td>
                        </tr>
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
