import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RegistroServicio = () => {
  const { store, actions } = useContext(Context);

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
      "NombreRegion": "Antofagasta",
      "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
      "NombreRegion": "Atacama",
      "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
      "NombreRegion": "Coquimbo",
      "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
      "NombreRegion": "Valparaíso",
      "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
      "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
      "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
      "NombreRegion": "Región del Maule",
      "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
      "NombreRegion": "Región del Biobío",
      "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
    },
    {
      "NombreRegion": "Región de la Araucanía",
      "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria",]
    },
    {
      "NombreRegion": "Región de Los Ríos",
      "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
      "NombreRegion": "Región de Los Lagos",
      "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
      "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
      "NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
      "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
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
      <div className="row" id="editar; carrusel 1, 2, 3 que se debe habilitar a medida que el proveedor se registra">
        <p className="col">Ingreso de datos del proveedor</p>
        <p className="col">Ingreso de servicio</p>
        <p className="col">Publicar servicio</p>
      </div>

      <div className="container border border-secondary" id="contenedor-formulario">

        <div className="container my-3" id="1 seleccion-categoria">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <div class="col-6 alert alert-info text-center">
                <i class="fas fa-hand-pointer"></i>
                <p>Seleccione categoría</p>
              </div>
            </div>
            <div className="col-8">

              <form>
                <div className="form-group my-3">
                  <label for="categoría" class="form-label">Categoría</label>
                  <select class="form-select" id="categoria" aria-label="Default select example">

                    <option selected>Seleccionar</option>
                    <option value="1">Venta</option>
                    <option value="2">Reparaciones</option>
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
              <div class="col-6 alert alert-info text-center">
                <i class="fas fa-file-alt"></i>
                <p>Crear Servicio</p>
              </div>
            </div>
            <div className="col-8">
              <form>
                <div class="mb-3">
                  <label for="nombre-servicio" class="form-label">Nombre del Servicio</label>
                  <input type="email" class="form-control" id="nombre-servicio" placeholder="Ej. reparación de pantallas iPhone" />
                </div>
                <div class="mb-3">
                  <label for="descripcion" class="form-label">Descripción detallada del Servicio</label>
                  <textarea class="form-control" id="descripcion" rows="3"></textarea>
                </div>
                <div className="form-group my-3">
                  <label for="categoría" class="form-label">Tipo de servicio de nuevo??</label>
                  <select class="form-select" id="categoria" aria-label="Default select example">
                    <option selected>??</option>
                    <option value="1">??</option>
                    <option value="2">??</option>
                  </select>
                </div>
                <div className="row">
                  <div class="col">
                    <label for="valor" class="form-label" >Valor</label>
                    <input type="text" class="form-control" id="valor" placeholder="$40.000.-" />
                  </div>
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



        <div id="part3" disabled>
          <h2>Parte 3</h2>

        </div>
      </div>

    </div>
  );

};
