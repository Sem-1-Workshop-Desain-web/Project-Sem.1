import React, { createContext, useState, useContext } from 'react';

// Membuat Context untuk pengguna
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Status user

    // Fungsi untuk login
    const login = (name) => {
        setUser({ name });
    };

    // Fungsi untuk logout
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
