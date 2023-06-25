const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productos: {},
			servicioTecnico: {},
			imagenes: {},
		},

		actions: {
			getServicios: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/servicios");
					const data = await resp.json();

					// Filtrar los servicios por la categoría de productos 
					const get_productos = data.filter(servicio => servicio.categoria_id === 1);
					const get_serviciotecnico = data.filter(servicio => servicio.categoria_id === 2);

					console.log(get_productos);
					console.log(get_serviciotecnico);

					setStore({ productos: get_productos });
					setStore({ servicioTecnico: get_serviciotecnico });

					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getImagenes: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/imagenes_servicio");
					const data = await resp.json();
					console.log(data)

					setStore({ imagenes: data });

					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

		}
	};
};

export default getState;
