import React, { useState, useEffect } from "react";
import { AllRegionesYcomunas } from "./regionesYcomunas";

export const SeleccionVariasComunas = ({ onSelectedComunasChange }) => {
    const RegionesYcomunas = AllRegionesYcomunas;

    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedComunas, setSelectedComunas] = useState([]);

    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegion(selectedRegion);
        setComuna("");
        setSelectedRegion(selectedRegion);
    };

    const handleComunaChange = (e) => {
        const selectedComuna = e.target.value;
        setComuna(selectedComuna);
    };

    const handleAddComuna = () => {
        if (selectedComunas && selectedRegion && comuna) {
            const existingRegion = selectedComunas.find(
                (item) => item.region === selectedRegion
            );
            if (existingRegion) {
                const updatedComunas = [...existingRegion.comunas, comuna]; // Agregar la comuna al array existente
                const updatedRegion = {
                    ...existingRegion,
                    comunas: updatedComunas,
                };
                const updatedSelectedComunas = selectedComunas.map((item) => {
                    if (item.region === selectedRegion) {
                        return updatedRegion; // Reemplazar la región existente con la actualizada
                    }
                    return item;
                });
                setSelectedComunas(updatedSelectedComunas);
            } else {
                setSelectedComunas([
                    ...selectedComunas,
                    {
                        region: selectedRegion,
                        comunas: [comuna], // Crear un nuevo array de comunas con la comuna seleccionada
                    },
                ]);
            }
            setComuna("");
        }
    };

    useEffect(() => {
        onSelectedComunasChange(selectedComunas);
    }, [selectedComunas, onSelectedComunasChange]);

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
                                {item.region}, comuna:{" "}
                                {item.comunas && item.comunas.length > 0
                                    ? item.comunas.length === 1
                                        ? item.comunas[0]
                                        : item.comunas.join(", ")
                                    : ""}
                            </li>
                        ))}
                    </ul>
                </div>
                
        </div>
    );
};
