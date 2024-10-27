"use client"

import React from "react";
import Providers from "@/app/provider";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    );
}
