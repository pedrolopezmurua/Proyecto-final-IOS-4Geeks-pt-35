import React, { useState } from "react";
import { AllRegionesYcomunas } from "./regionesYcomunas_proveedor";

export const Direccion_proveedor = () => {

    const RegionesYcomunas = AllRegionesYcomunas;

    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

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

    return (
        <div className="row">
            <div className="col" id="seleccionRegion" style={{ width: '300px' }} >
                <label htmlFor="regiones">Región:</label>
                <select id="regiones" className="form-select" value={region} onChange={handleRegionChange}>
                    <option value="">Seleccione región</option>
                    {RegionesYcomunas.regiones.map((region, index) => (
                        <option key={index} value={region.NombreRegion}>{region.NombreRegion}</option>
                    ))}
                </select>
            </div>
            <div className="col" id="seleccionComuna" style={{ width: '300px' }} >
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
        </div>
    )

}

