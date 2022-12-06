import { AuthContext } from '../context';
import { useState, useMemo } from 'react';

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const login = (userDetails) => {
        setUser(userDetails);
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(() => ({
        user, login, logout
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
