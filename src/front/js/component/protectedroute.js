// ./js/component/protectedroute.js

import React, { useEffect, useState } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom'; // Importa Route
import { showPopupError } from './popupx';

const ProtectedRoute = ({ component: Component }) => {
    const navigate = useLocation();
    const token = localStorage.getItem('Token');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkTokenValidity = async () => {
        try {
            if (token) {
                const response = await fetch('http://localhost:3001/api/check', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    return true;
                }
            }
        } catch (error) {
            console.log('Error al validar el token:', error);
        }

        return false;
    };

    useEffect(() => {
        const validateToken = async () => {
            const isValid = await checkTokenValidity();

            if (!isValid) {
                showPopupError('La página es privada, debes estar Autenticado para su uso.');
            } else {
                setIsAuthenticated(true);
            }
        };

        validateToken();
    }, []);

    if (isAuthenticated) {
        return <Route element={<Component />} />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
