// ./store/authContext.js

import React, { useState, createContext } from 'react';

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Componente principal de la aplicación
function authContext({ children }) {
    const [userName, setUserName] = useState(null);
    const [userId, setUserId] = useState(null);


    const logIn = (user, id) => {
        setUserName(user);
        setUserId(id);
    };

    const logOut = () => {
        setUserName(null);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ userName, userId, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default authContext;