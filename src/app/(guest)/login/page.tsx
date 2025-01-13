import React from 'react'
import GuestFromWrapper from "@/components/guestFormWrapper";
import LoginForm from "./form";
export default function LoginPage()
{
    return (
        <GuestFromWrapper>
            <div>
                <h1 className="text-4xl font-bold text-white">Find your date and partners for life...</h1>
            </div>

            <div className="w-96 bg-base-200 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold">Login</div>
                <LoginForm/>
            </div>
        </GuestFromWrapper>
    )
}
