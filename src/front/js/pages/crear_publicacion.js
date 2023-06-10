//./pages/crear_publicacion.js
import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { AllRegionesYcomunas } from "../component/regionesYcomunas";
import { AuthContext } from '../store/authContext'
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CrearPublicacion = () => {

  const { actions } = useContext(Context);
  const { userId } = useContext(AuthContext);
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedComunas, setSelectedComunas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(false);
  const [coberturaSeleccionada, setCoberturaSeleccionada] = useState(false);
  const [todoChileSelected, setTodoChileSelected] = useState(false);
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

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
    //Validaciones
    if (!categoriaSeleccionada) {
      MySwal.fire(
        'Error',
        'Debes seleccionar una categoría',
        'error'
      );
    };
    if (categoriaSeleccionada && !coberturaSeleccionada) {
      MySwal.fire(
        'Error',
        'Debes indicar tu cobertura',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && !titulo) {
      MySwal.fire(
        'Error',
        'Debes indicar el título de tu publicación',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && titulo.length < 5 || titulo.length > 50) {
      MySwal.fire(
        'Error',
        'El título debe tener entre 10 y 50 caracteres',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && titulo && !detalle) {
      MySwal.fire(
        'Error',
        'Debes indicar una descripción detallada para tu publicación',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && titulo && detalle.length < 20 || detalle.length > 1000) {
      MySwal.fire(
        'Error',
        'La descripción debe tener entre 20 y 1000 caracteres',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && titulo && detalle && !precio) {
      MySwal.fire(
        'Error',
        'Debes indicar un precio para tu publicación',
        'error'
      );
      return;
    };
    if (categoriaSeleccionada && coberturaSeleccionada && titulo && detalle && precio_int < 1000) {
      MySwal.fire(
        'Error',
        'El precio debe ser de al menos $1.000',
        'error'
      );
      return;
    };
    // Crea el objeto de datos a enviar
    const data = {
      titulo: titulo,
      detalle: detalle,
      precio: precio_int,
      proveedor_id: proveedor_id,
      categoria_id: categoria_id,
      cobertura: JSON.stringify(selectedComunas),
      estado: true
    };
    // Solicitud POST tabla Servicio
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
        MySwal.fire(
          'Éxito',
          'La publicación se creó correctamente',
          'success'
        )
        actions.getServicios();
        navigate(`/subir-imagenes/${data.id}`)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const SeleccionaCobertura = () => {

    const RegionesYcomunas = AllRegionesYcomunas;

    const handleRegionChange = (e) => {
      const selectedRegion = e.target.value;
      setRegion(selectedRegion);
      setComuna("");
      setSelectedRegion(selectedRegion);
      if (selectedRegion === "Todo Chile") {
      } else {
        setTodoChileSelected(false);
      }
    };
    const handleComunaChange = (e) => {
      if (todoChileSelected) {
        setComuna("")
      } else {
        const selectedComuna = e.target.value;
        setComuna(selectedComuna);
      }
    };
    const handleAddComuna = () => {
      if (region === "") {
        alert("Debes seleccionar al menos una región");
        return;
      }
      if (comuna === "" && region !== "Todo Chile") {
        alert("Debes seleccionar al menos una comuna");
        return;
      }
      if (selectedComunas && selectedRegion) {
        if (region === "Todo Chile") {
          setSelectedComunas([
            {
              region: "Todo Chile",
              comunas: [],
            },
          ]);
        } else {
          const existingRegion = selectedComunas.find(
            (item) => item.region === selectedRegion
          );
          if (existingRegion) {
            const updatedComunas = [...existingRegion.comunas, comuna];
            const updatedRegion = {
              ...existingRegion,
              comunas: updatedComunas,
            };
            const updatedSelectedComunas = selectedComunas.map((item) => {
              if (item.region === selectedRegion) {
                return updatedRegion;
              }
              return item;
            });
            setSelectedComunas(updatedSelectedComunas);
          } else {
            setSelectedComunas([
              ...selectedComunas,
              {
                region: selectedRegion,
                comunas: [comuna],
              },
            ]);
          }
        }
        setComuna("");
        if (region !== "") {
          setCoberturaSeleccionada(true);
        }
      }
    };

    const handleRemoveComuna = (index) => {
      const updatedSelectedComunas = selectedComunas.filter((item, i) => i !== index); // Filtra los elementos de selectedComunas y crea un nuevo array sin el elemento en el índice proporcionado
      setSelectedComunas(updatedSelectedComunas); // Actualiza el estado selectedComunas con el nuevo array sin el elemento eliminado
      if (updatedSelectedComunas.length === 0) {
        setCoberturaSeleccionada(false);
      }
    };


    return (
      <div className="container">
        <div className="row">
          <div className="col-5" id="seleccionRegion" style={{ width: '300px' }} >
            <label htmlFor="regiones">Región:</label>
            <select
              id="regiones"
              className="form-select mt-1"
              value={region}
              onChange={handleRegionChange}
            >
              <option value="">Seleccione una región</option>
              {RegionesYcomunas.regiones.map((region, index) => (
                <option key={index} value={region.NombreRegion}>{region.NombreRegion}</option>
              ))}
            </select>
          </div>
          <div className="col-5" id="seleccionComuna" style={{ width: '300px' }} >
            <label htmlFor="comunas">Comuna:</label>
            <select
              id="comunas"
              className="form-select mt-1"
              value={comuna}
              onChange={handleComunaChange}
            >
              <option value="">Seleccione una comuna</option>
              {RegionesYcomunas.regiones.map((region) => {
                if (region.NombreRegion === selectedRegion) {
                  return region.comunas.map((comuna, index) => (
                    <option key={index} value={comuna}>{comuna}</option>
                  ));
                }
                return null;
              })}
            </select>
          </div>
        </div>
        <div className="col-3 d-flex mt-1">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={handleAddComuna}
            style={{ width: "75%", fontSize: "75%" }}
          >
            Agregar comuna</button>
        </div>
        <div>
          <p className="form-label mt-3">Comunas seleccionadas:</p>
          <ul>
            {selectedComunas.map((item, index) => (
              <li key={index}>
                {item.region === "Todo Chile" ? "Todo Chile" : `${item.region}, comuna: `}
                {item.comunas && item.comunas.length > 0
                  ? item.comunas.length === 1
                    ? item.comunas[0]
                    : item.comunas.join(", ")
                  : ""}
                <button onClick={() => handleRemoveComuna(index)} type="button" className="btn-close" aria-label="Remove"></button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }


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
                <select defaultValue="0" className="form-select" id="categoria" aria-label="Selecciona una categoría" required onChange={(e) => setCategoriaSeleccionada(e.target.value !== "0")}>
                  <option value="0">Seleccionar</option>
                  <option value="1">Productos</option>
                  <option value="2">Servicio técnico</option>
                </select>
              </div>
              <div className="mb-3" id="titulo-publicacion">
                <label htmlFor="nombre-servicio" className="form-label">Título de la publicación</label>
                <input type="text" className="form-control" id="tituloPublicacion" placeholder="Ej. Mantención de Macbook" maxLength={100} />
              </div>
              <div className="mb-3" id="descripcion-publicacion">
                <label htmlFor="descripcion" className="form-label">Descripción detallada</label>
                <textarea className="form-control" id="descripcion" rows="3" maxLength={3000}></textarea>
              </div>
              <label htmlFor="precio" className="form-label" >Precio</label>
              <div className="input-group mb-3" id="seleccion-valor-servicio">
                <span className="input-group-text">$</span>
                <input type="number" className="form-control" id="precio" placeholder="$40.000.-" />
              </div>
              <div className="row mt-3" id="seleccion-cobertura">
                <p className="form-label">Selecciona tu cobertura:</p>
                <SeleccionaCobertura selectedComunas={selectedComunas} setSelectedComunas={setSelectedComunas} />
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
