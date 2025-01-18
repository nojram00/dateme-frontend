"use client"

import React, { createContext, use } from 'react';
import { checkSession } from '@/libs/auth';

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