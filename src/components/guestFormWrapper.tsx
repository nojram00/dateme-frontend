import React from "react";
export default function GuestFormWrapper({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative w-full h-full bg-base-100 flex flex-row gap-3 items-center justify-center"
        >
            <div className="absolute inset-0 bg-cover bg-center opacity-50"
                 style={{
                     backgroundImage: "url('/image.jpg')",
                     width: "100%",
                     height: "100vh",
                 }}/>

            <div className="relative z-10 w-full h-full flex flex-col gap-10 mt-10 items-center">
                { children }
            </div>
        </div>
    );
}
