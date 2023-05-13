// ./store/authContext.js

import React, { useState, createContext } from 'react';
import { Navbar } from '../component/navbar';
import Login from '../pages/login';

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Componente principal de la aplicación
function authContext({ children }) {
    const [user, setUser] = useState(null);

    const logIn = (user) => {
        setUser(user);
    };

    const logOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}

        </AuthContext.Provider>
    );
}

export default authContext;