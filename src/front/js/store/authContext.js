// ./store/authContext.js
import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [userName, setUserName] = useState(null);
    const [userId, setUserId] = useState(null);

    const logIn = (user, id) => {
        localStorage.setItem('userName', user);
        localStorage.setItem('userId', id);
        setUserName(user);
        setUserId(id);
    };

    const logOut = () => {
        // Elimina el token y el correo del usuario del almacenamiento local
        localStorage.removeItem('Token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        setUserName(null);
        setUserId(null);
    };

    useEffect(() => {
        const user = localStorage.getItem('userName');
        const id = localStorage.getItem('userId');

        if (user) {
            setUserName(user);
            setUserId(id);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ userName, userId, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
