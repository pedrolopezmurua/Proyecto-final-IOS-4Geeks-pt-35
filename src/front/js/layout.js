import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/common/scrollToTop";
import { Navbar } from "./component/navbar/navbar";
import Footer from './component/footer/footer';
import { FaqRegistro, FaqResponsabilidad, FaqTerminos } from './component/footer/FAQ';

import Login from "./pages/login/login";
import ResetPassword from "./pages/login/resetpassword";
import CrearProveedor from './pages/crearproveedor';
import RecuperaPassword from "./pages/login/recuperapassword";


import { Home } from "./pages/home";
import { Productos } from "./pages/productos";
import { ServicioTecnico } from "./pages/serviciotecnico";
import { DetallesProducto } from "./pages/detalleProducto";
import { DetallesServicioTec } from "./pages/detalleServicioTec";
import injectContext from "./store/appContext";
import { VerPublicaciones } from './pages/ver_publicaciones';
import { CrearPublicacion } from "./pages/publicaciones/crear_publicacion";
import { Perfil } from "./pages/perfil";
import AuthContextProvider from './store/authContext';
import { SubirImagenes } from "./pages/publicaciones/subirImagenes";
import Error404 from "./pages/error404";
import DevolucionesPage from "./pages/devolucionespage";
import { ModificaProducto } from './pages/publicaciones/modifica_producto';
import ProtectedRoute from "./component/common/protectedroute";

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
                            <Route element={<ProtectedRoute><CrearPublicacion /></ProtectedRoute>} path="/crear-publicacion" />
                            <Route element={<ProtectedRoute><VerPublicaciones /></ProtectedRoute>} path="/publicaciones" />
                            <Route element={<ProtectedRoute><SubirImagenes /></ProtectedRoute>} path="subir-imagenes/:servicioId" />
                            <Route element={<ProtectedRoute><ModificaProducto /></ProtectedRoute>} path="modificar-publicacion/:servicioId" />
                            <Route element={<FaqRegistro />} path="/faqregistro" />
                            <Route element={<FaqResponsabilidad />} path="/faqresponsabilidad" />
                            <Route element={<FaqTerminos />} path="/faqterminos" />
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
