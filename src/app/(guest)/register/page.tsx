"use client"
import GuestFromWrapper from "@/components/guestFormWrapper";
import React, { use, useActionState, useEffect } from "react";
import Input from "@/components/Input";
import Link from "next/link";
import { register } from "@/actions/authActions";

export default function Register() {
    const [state, action, pending] = useActionState(register, { error : "" });

    useEffect(() => {

        if (state.error !== "") {
            alert(state.error);
        }
        
    }, [state]);

    return (
        <GuestFromWrapper>
            <div>
                <h1 className="text-4xl font-bold text-white">Register for new users.</h1>
            </div>

            <div className="w-96 bg-base-200 p-4 h-full rounded-lg shadow-md">
                <div className="text-2xl font-bold">Register</div>
                <form className="flex flex-col gap-4 mt-4" action={action}>  

                    <Input placeholder="First Name" name="first_name" disabled={pending}/>
                    <Input placeholder="Last Name" name="last_name" disabled={pending}/>

                    <hr className="text-2xl h-2 border-none bg-gray-500 rounded-md"/>

                    <Input placeholder="Email" type="email" name="email" disabled={pending}/>
                    <Input placeholder="Username" name="username" disabled={pending}/>
                    <Input placeholder="Password" type="password" name="password" disabled={pending}/>
                    <Input placeholder="Confirm Password" type="password" name="confirm_password" disabled={pending}/>

                    <div className="flex flex-row items-center w-full gap-2">
                        <label htmlFor="gender">Gender: </label>
                        <select name="gender" id="gender" className="p-2 rounded-lg border-gray-300 text-gray-300 max-w-lg w-full" disabled={pending}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <span className="text-center">Already have an account? 
                        <Link className="underline hover:text-gray-300" href="/login"> Login Here</Link></span>
                    <button disabled={pending} className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark">Register</button>
                </form>
            </div>
        </GuestFromWrapper>
    )
}
