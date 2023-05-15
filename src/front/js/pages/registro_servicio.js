import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { SubirImagenes } from "../component/subirImagenes";
import { SeleccionVariasComunas } from '../component/seleccionVariasComunas';
import { AuthContext } from '../store/authContext'

export const RegistroServicio = () => {

  const { userId } = useContext(AuthContext)

  const [selectedComunas, setSelectedComunas] = useState([]);
  const handleSelectedComunasChange = (comunas) => {
    setSelectedComunas(comunas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtiene los valores del formulario
    const categoria_select = document.getElementById("categoria");
    const categoria_id = parseInt(categoria_select.value, 10);
    const titulo = document.getElementById("tituloPublicacion").value;
    const detalle = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const precio_int = parseInt(precio, 10);
    const proveedor_id = userId;

    // Crea el objeto de datos a enviar
    const data = {
      titulo: titulo,
      detalle: detalle,
      precio: precio_int,
      proveedor_id: proveedor_id,            //MODIFICAR EVENTUALMENTE
      categoria_id: categoria_id,
      cobertura: JSON.stringify(selectedComunas),
      estado: true
    };

    // Realiza la solicitud POST al endpoint de la ruta
    fetch("http://127.0.0.1:3001/api/servicios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });



  };
  useEffect(() => {
    console.log("a ver si se estan guardando las comunas", selectedComunas);
    console.log("userID?", userId)
  }, [selectedComunas]);
  return (
    <div className="container my-3">
      <h1 className="mb-3">Crear nueva publicación</h1>
      <div className="container border border-secondary" id="contenedor-formulario">
        <hr className="mx-5 my-5" />
        <div className="row" id="contenido-formulario">
          <div className="col-4 d-flex justify-content-center" id="cuadro-crear-servicio-izq">
            <div className="alert alert-primary text-center m-2 p-3" style={{ maxHeight: "7rem", maxWidth: "auto" }}>
              <i className="fas fa-file-alt"></i>
              <p className="m-0">Crear Publicación</p>
              <i className="fa-solid fa-arrow-right fa-2xs my-0"></i>
            </div>
          </div>
          <div className="col-8" id="opciones-formulario">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3" id="seleccion-categoria">
                <label htmlFor="categoría" className="form-label">Categoría</label>
                <select defaultValue="0" className="form-select" id="categoria" aria-label="Selecciona una categoría">
                  <option value="0">Seleccionar</option>
                  <option value="1">Productos</option>
                  <option value="2">Servicio técnico</option>
                </select>
              </div>
              <div className="mb-3" id="titulo-publicacion">
                <label htmlFor="nombre-servicio" className="form-label">Título de la publicación</label>
                <input type="text" className="form-control" id="tituloPublicacion" placeholder="Ej. Mantención de Macbook" />
              </div>
              <div className="mb-3" id="descripcion-publicacion">
                <label htmlFor="descripcion" className="form-label">Descripción detallada</label>
                <textarea className="form-control" id="descripcion" rows="3"></textarea>
              </div>
              <div className="col" id="seleccion-valor-servicio">
                <label htmlFor="precio" className="form-label" >Precio</label>
                <input type="text" className="form-control" id="precio" placeholder="$40.000.-" />
              </div>
              <div className="row mt-3" id="seleccion-cobertura">
                <SeleccionVariasComunas onSelectedComunasChange={handleSelectedComunasChange} />
              </div>
              <div className="col" id="seleccion-imagenes">
                <label htmlFor="valor" className="form-label" >Adjuntar fotos</label>
                <hr className="mt-0 me-4" />
                <div className="row">

                  <div className="col-6">
                    <SubirImagenes />
                  </div>
                  <div className="col-6">
                    <SubirImagenes />
                  </div>
                </div>
                <hr className="mt-4 me-4" />
              </div>
              <div className="d-flex justify-content-end me-4">

                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
        <hr className="mx-5 my-5" />


      </div>

    </div >
  );

};
