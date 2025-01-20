"use server"
import axios from 'axios';
import { cookies } from  "next/headers"
import { redirect } from "next/navigation"

export async function login(prevState : { error : string | null }, formData : FormData) {
    const credentials = {
        username : formData.get("username") as string ?? "",
        password : formData.get("password") as string ?? ""
    }

    const response = await axios.post(`${process.env.BACKEND_URL}/users/login`, credentials);

    if (response.status === 200) {
        const c = await cookies();
        const session = response.data.session_id;
        c.set("session", session);
        return redirect("/posts");
    }
    
    return {
        error : "Invalid credentials"
    }

}

export async function register(prevState : { error : string | null }, formData : FormData) {
    const credentials = {
        email : formData.get("email") as string ?? "",
        username : formData.get("username") as string ?? "",
        password : formData.get("password") as string ?? "",
        first_name : formData.get("first_name") as string ?? "",
        last_name : formData.get("last_name") as string ?? "",
        gender : formData.get("gender") as string ?? ""
    }

    if (credentials.password !== formData.get("confirm_password")) {
        return {
            error : "Passwords do not match"
        }
    }

    const response = await axios.post(`${process.env.BACKEND_URL}/users/register`, credentials);

    if (response.status === 200) {
        const c = await cookies();
        const session = response.data.session_id;
        c.set("session", session);
        return redirect("/posts");
    }
    
    return {
        error : "Invalid credentials"
    }
}

export async function logout()
{
    const c = await cookies();
    console.log("Session: ",c.get("session"));
    const response = await axios.post(`${process.env.BACKEND_URL}/users/logout`, {},{
        headers : {
            'Content-Type' : 'application/json',
            'X-Session-Header' : c.get("session")?.value
        }
    });

    if (response.status === 200) {
        c.delete("session");
        return redirect("/login");
    }
}
