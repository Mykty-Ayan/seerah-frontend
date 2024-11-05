"use client";

import { PropsWithChildren } from "react";
import ReduxProvider from "./redux-provider";
import { AuthProvider } from "./context/AuthContext"; 

export default function Providers({ children }: PropsWithChildren<any>) {
    return (
        <ReduxProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ReduxProvider>
    );
}
