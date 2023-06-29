//./pages/publicaciones/useSeleccionaCobertura.js
import React, { useState } from "react";
import { AllRegionesYcomunas } from "../../component/regionesYcomunas";

export const useSeleccionaCobertura = () => {
    const RegionesYcomunas = AllRegionesYcomunas;

    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedComunas, setSelectedComunas] = useState([]);
    const [todoChileSelected, setTodoChileSelected] = useState(false);
    const [coberturaSeleccionada, setCoberturaSeleccionada] = useState(false);

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
            showPopupError("Debes seleccionar al menos una región");
            return;
        }
        if (comuna === "" && region !== "Todo Chile") {
            showPopupError("Debes seleccionar al menos una comuna");
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
            <div className="row" id="rowSeleccionRegionYComuna">
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
