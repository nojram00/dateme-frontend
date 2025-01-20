"use client"

import React, { createContext } from 'react';

export type Profile = {
    name: string;
    email: string;
    id: string;
}

export const AuthContext = createContext<Profile | undefined>(undefined);

export default function AuthComponent({children, data} : {children : React.ReactNode , data : Profile}) {
    
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }
    return context;
}