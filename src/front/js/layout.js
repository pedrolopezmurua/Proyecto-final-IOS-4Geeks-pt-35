import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Productos } from "./pages/productos";
import { ServicioTecnico } from "./pages/serviciotecnico";
import { DetallesProducto } from "./pages/detalleProducto";
import { DetallesServicioTec } from "./pages/detalleServicioTec";
import { Demo } from "./pages/demo";
import Login from "./pages/login";
import RecuperaPassword from "./pages/recuperapassword";
import CrearProveedor from './pages/crearproveedor';
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SubiendoImagenes } from "./component/subirImagenes";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<RecuperaPassword />} path="/recuperapassword" />
                        <Route element={<CrearProveedor />} path="/crearproveedor" />
                        <Route element={<Productos />} path="/productos" />
                        <Route element={<ServicioTecnico />} path="/serviciotecnico" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<DetallesProducto />} path="/productos/detalle/:theid" />
                        <Route element={<DetallesServicioTec />} path="/serviciotecnico/detalle/:theid" />
                        <Route element={<SubiendoImagenes />} path="/prueba" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
