"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

export function Providers({children}:{children:React.ReactNode}){
    return <div>
        <SessionProvider>
            {children}
        </SessionProvider>
    </div>
}