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
import ResetPassword from "./pages/resetpassword";
import CrearProveedor from './pages/crearproveedor';
import { ModificaProducto } from './pages/modificaproducto';
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Footer from './component/footer';

import { SeleccionVariasComunas } from "./component/seleccionVariasComunas";
import { CrearPublicacion } from "./pages/crear_publicacion";
import { Perfil } from "./pages/perfil";
import AuthContextProvider from './store/authContext';
import { ListadoPublicaciones } from "./pages/listado_publicaciones";
import { SubirImagenes } from "./component/subirImagenes";
import Error404 from "./pages/error404";
import FaqPage from "./pages/faqpage";
import DevolucionesPage from "./pages/devolucionespage";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <AuthContextProvider>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<RecuperaPassword />} path="/recupera-password" />
                            <Route element={<ResetPassword />} path="/reset-password/:email" />
                            <Route element={<CrearProveedor />} path="/crearproveedor" />
                            <Route element={<Productos />} path="/productos" />
                            <Route element={<ServicioTecnico />} path="/serviciotecnico" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<DetallesProducto />} path="/productos/detalle/:id" />
                            <Route element={<DetallesServicioTec />} path="/serviciotecnico/detalle/:id" />
                            <Route element={<SeleccionVariasComunas />} path="/prueba" />
                            <Route element={<CrearPublicacion />} path="/crear-publicacion" />
                            <Route element={<ModificaProducto />} path="/modificaproducto" />
                            <Route element={<Perfil />} path="perfil" />
                            <Route element={<ListadoPublicaciones />} path="listado-publicaciones" />
                            <Route element={<SubirImagenes />} path="subir-imagenes/:servicioId" />
                            <Route element={<FaqPage />} path="/faqpage" />
                            <Route element={<DevolucionesPage />} path="/devolucionespage" />
                            <Route element={<Error404 />} path="*" />
                        </Routes>
                        <Footer />
                    </ScrollToTop>
                </AuthContextProvider>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
