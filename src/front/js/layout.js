//./layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";
import ScrollToTop from "./component/common/scrollToTop";
import AuthContextProvider from './store/authContext';
import ProtectedRoute from "./component/common/protectedroute";

import Error404 from "./pages/404/error404";
import { Home } from "./pages/home";
import { Navbar } from "./component/navbar/navbar";
import Footer from './component/footer/footer';
import { FaqRegistro, FaqResponsabilidad, FaqTerminos } from './component/footer/FAQ';

import Login from "./pages/login/login";
import ResetPassword from "./pages/login/resetpassword";
import CrearProveedor from './pages/login/crearproveedor';
import RecuperaPassword from "./pages/login/recuperapassword";


import { Productos } from "./pages/ver_producto/productos";
import { ServicioTecnico } from "./pages/ver_servicio_tecnico/serviciotecnico";
import { DetallesProducto } from "./pages/ver_producto/detalleProducto";
import { DetallesServicioTec } from "./pages/ver_servicio_tecnico/detalleServicioTec";

import { Perfil } from "./pages/publicaciones/perfil";
import { VerPublicaciones } from './pages/publicaciones/ver_publicaciones';
import { CrearPublicacion } from "./pages/publicaciones/crear_publicacion";
import { SubirImagenes } from "./pages/publicaciones/subirImagenes";
import { ModificaProducto } from './pages/publicaciones/modifica_producto';

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter>
                <AuthContextProvider>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<RecuperaPassword />} path="/recupera-password" />
                            <Route element={<ResetPassword />} path="/reset-password/:email" />
                            <Route element={<CrearProveedor />} path="/crear-proveedor" />
                            <Route element={<Productos />} path="/productos" />
                            <Route element={<ServicioTecnico />} path="/serviciotecnico" />
                            <Route element={<DetallesProducto />} path="/productos/detalle/:id" />
                            <Route element={<DetallesServicioTec />} path="/serviciotecnico/detalle/:id" />
                            <Route element={<ProtectedRoute><Perfil /></ProtectedRoute>} path="perfil" />
                            <Route element={<ProtectedRoute><VerPublicaciones /></ProtectedRoute>} path="/publicaciones" />
                            <Route element={<ProtectedRoute><CrearPublicacion /></ProtectedRoute>} path="/crear-publicacion" />
                            <Route element={<ProtectedRoute><SubirImagenes /></ProtectedRoute>} path="subir-imagenes/:servicioId" />
                            <Route element={<ProtectedRoute><ModificaProducto /></ProtectedRoute>} path="modificar-publicacion/:servicioId" />
                            <Route element={<FaqRegistro />} path="/faqregistro" />
                            <Route element={<FaqResponsabilidad />} path="/faqresponsabilidad" />
                            <Route element={<FaqTerminos />} path="/faqterminos" />
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
