import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SeleccionVariasComunas = () => {
    const RegionesYcomunas = {
        regiones: [
            {
                NombreRegion: "Arica y Parinacota",
                comunas: ["Arica", "Camarones"],
            },
            {
                NombreRegion: "Tarapacá",
                comunas: ["Iquique", "Alto Hospicio"],
            },
            {
                NombreRegion: "Antofagasta",
                comunas: ["Antofagasta", "Mejillones"],
            },
        ],
    };


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
        if (selectedComunas && selectedRegion) {
            setSelectedComunas((prevComunas) => [...prevComunas,
            {
                region: selectedRegion,
                comuna: comuna
            }]);
            setComuna("");
        }
    };

    return (
        <div>
            <div>
                <div>
                    <p className="form-label">Selecciona tu cobertura:</p>
                </div>
                <div className="row">

                    <div className="col-5" id="seleccionRegion" style={{ width: '300px' }} >
                        <label htmlFor="regiones">Región:</label>
                        <select id="regiones" className="form-select" value={region} onChange={handleRegionChange}>
                            <option value="">Seleccione región</option>
                            {RegionesYcomunas.regiones.map((region, index) => (
                                <option key={index} value={region.NombreRegion}>{region.NombreRegion}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-5" id="seleccionComuna" style={{ width: '300px' }} >
                        <label htmlFor="comunas">Comuna:</label>
                        <select id="comunas" className="form-select" value={comuna} onChange={handleComunaChange}>
                            <option value="">Seleccione comuna</option>
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
                    <div className="col-2">

                        <button type="button" className="btn btn-primary" onClick={handleAddComuna}>Agregar comuna</button>
                    </div>
                </div>
                <div>
                    <p className="form-label mt-3">Comunas seleccionadas:</p>
                    <ul>
                        {selectedComunas.map((item, index) => (

                            <li key={index}>Región: {item.region}, comuna: {item.comuna}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
