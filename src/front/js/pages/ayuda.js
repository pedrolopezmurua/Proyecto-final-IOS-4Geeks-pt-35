import React, { useContext, useState } from "react";

export const RegistroServicio = () => {


    const RegionesYcomunas = {

        "regiones": [{
            "NombreRegion": "Arica y Parinacota",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            "NombreRegion": "Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "NombreRegion": "Región Metropolitana de Santiago",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
    }

    const Formulario = () => {
        const [region, setRegion] = useState("");
        const [comuna, setComuna] = useState("");

        const handleRegionChange = (e) => {
            const selectedRegion = e.target.value;
            setRegion(selectedRegion);
            setComuna("");
        };

        const handleComunaChange = (e) => {
            const selectedComuna = e.target.value;
            setComuna(selectedComuna);
        };
    }

    return (
        <div className="container my-3">
            <h1>Ingreso del servicio</h1>
            <div className="container border border-secondary" id="contenedor-formulario">
                <hr className="mx-5" />
                <div id="2 crear-servicio">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-center">
                            <div class="col-6 alert alert-info text-center">
                                <i class="fas fa-file-alt"></i>
                                <p>Crear Servicio</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <form>
                                <div className="row">
                                    <div class="col">
                                        <label for="regiones" class="form-label">Región</label>
                                        <select id="regiones" class="form-select" value={region} onChange={handleRegionChange}>
                                            <option value="">Seleccione región</option>
                                            {RegionesYcomunas.regiones.map((region, index) => (
                                                <option key={index} value={region.NombreRegion}>{region.NombreRegion}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="comunas" class="form-label" >Comuna</label>
                                        <select id="comunas" class="form-select" value={comuna} onChange={handleComunaChange}>
                                            <option value="">Seleccione comuna</option>
                                            {RegionesYcomunas.regiones.map((region) => {
                                                if (region.NombreRegion === region) {
                                                    return region.comunas.map((comuna, index) => (
                                                        <option key={index} value={comuna}>{comuna}</option>
                                                    ));
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );

};
