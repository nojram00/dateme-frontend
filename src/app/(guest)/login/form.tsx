"use client"

import Input from "@/components/Input";
import Link from "next/link";
import React, { useActionState } from "react";
import { login } from "@/actions/authActions";

export default function LoginForm() {

    const [prevState, action, pending] = useActionState(login, { error : ""});
    return (
        <form className="flex flex-col gap-4 mt-4" action={action}>

            <Input placeholder="Username" name="username" disabled={pending}/>
            <Input placeholder="Password" type="password" name="password" disabled={pending}/>

            <span className="text-center">No account yet? <Link className="underline hover:text-gray-300"
                                                                href="/register">Register</Link></span>

            { prevState?.error && <div className="text-red-500 p-2 border rounded-sm">{prevState.error}</div> }
            <button disabled={pending} className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark">{ !pending ? "Login" : "Logging In..." }</button>
        </form>
    )

}
