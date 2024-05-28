import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initially, no user is logged in

    const login = (userCredentials) => {
        // Authentication logic here
        setUser(userCredentials); // Dummy user object
        localStorage.setItem('authenticatedUser', JSON.stringify(userCredentials));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authenticatedUser');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('authenticatedUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
