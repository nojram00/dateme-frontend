import GuestFromWrapper from "@/components/guestFormWrapper";
import React from "react";
import Input from "@/components/Input";
import Link from "next/link";
export default function Register() {
    return (
        <GuestFromWrapper>
            <div>
                <h1 className="text-4xl font-bold text-white">Register for new users.</h1>
            </div>

            <div className="w-96 bg-base-200 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold">Register</div>
                <div className="flex flex-col gap-4 mt-4">
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Username" name="username"/>
                    <Input placeholder="Password" type="password" name="password"/>
                    <Input placeholder="Confirm Password" type="password" name="confirm_password"/>

                    <span className="text-center">Already have an account? <Link className="underline hover:text-gray-300"
                                                                        href="/login">Login Here</Link></span>
                    <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark">Register</button>
                </div>
            </div>
        </GuestFromWrapper>
    )
}
