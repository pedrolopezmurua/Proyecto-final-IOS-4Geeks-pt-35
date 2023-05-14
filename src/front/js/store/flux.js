const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productos: {},
			servicioTecnico: {},
			imagenes: {},
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

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



			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
