"use client"

import Input from "@/components/Input";
import Link from "next/link";
import React, { useActionState } from "react";
import { login } from "@/actions/authActions";

export default function LoginForm() {

    const [state, action, pending] = useActionState(login, null)
    return (
        <form className="flex flex-col gap-4 mt-4" action={action}>

            <Input placeholder="Username" name="username"/>
            <Input placeholder="Password" type="password" name="password"/>

            <span className="text-center">No account yet? <Link className="underline hover:text-gray-300"
                                                                href="/register">Register</Link></span>

            { state?.error && <div className="text-red-500 p-2 border rounded-sm">{state.error}</div> }
            <button disabled={pending} className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark">Login</button>
        </form>
    )

}
