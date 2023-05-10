import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SubiendoImagenes } from "../component/subirImagenes";
import { SeleccionVariasComunas } from '../component/seleccionVariasComunas';

export const RegistroServicio = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container my-3">
      <h1>Ingreso del servicio</h1>
      <div className="row" id="editar; carrusel 1, 2, 3 que se debe habilitar a medida que el proveedor se registra">
        <p className="col">Ingreso de datos del proveedor</p>
        <p className="col">Ingreso de servicio</p>
        <p className="col">Publicar servicio</p>
      </div>

      <div className="container border border-secondary" id="contenedor-formulario">

        <div className="container my-3" id="1 seleccion-categoria">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <div className="col-6 alert alert-info text-center">
                <i className="fas fa-hand-pointer"></i>
                <p>Seleccione categoría</p>
              </div>
            </div>
            <div className="col-8">

              <form>
                <div className="form-group my-3">
                  <label htmlFor="categoría" className="form-label">Categoría</label>
                  <select defaultValue="0" className="form-select" id="categoria" aria-label="Default select example">

                    <option value="0">Seleccionar</option>
                    <option value="1">Productos</option>
                    <option value="2">Servicio técnico</option>
                  </select>
                </div>

              </form>
            </div>
          </div>
        </div>

        <hr className="mx-5" />

        <div id="2 crear-servicio">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <div className="col-6 alert alert-info text-center">
                <i className="fas fa-file-alt"></i>
                <p>Crear Servicio</p>
              </div>
            </div>
            <div className="col-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre-servicio" className="form-label">Nombre del Servicio</label>
                  <input type="email" className="form-control" id="nombre-servicio" placeholder="Ej. reparación de pantallas iPhone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción detallada del Servicio</label>
                  <textarea className="form-control" id="descripcion" rows="3"></textarea>
                </div>
                  <div className="col">
                    <label htmlFor="valor" className="form-label" >Valor</label>
                    <input type="text" className="form-control" id="valor" placeholder="$40.000.-" />
                  </div>
                <div className="row">
                  <SeleccionVariasComunas/>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr className="mx-5" />

        <div className="container my-3" id="3-fotos-servicio">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <div className="col-6 alert alert-info text-center">
                <i className="fas fa-paperclip"></i>
                <p>Adjunte fotos</p>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <SubiendoImagenes />
                </div>
                <div className="col-6">
                  <SubiendoImagenes />
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>

    </div >
  );

};
