"use client"
import { logout } from "@/actions/authActions";

export default function LogoutBtn() {
    return (
        <button className="p-2 btn btn-error" onClick={logout}>Logout</button>
    )
}
