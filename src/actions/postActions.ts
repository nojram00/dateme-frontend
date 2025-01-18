"use server"
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createPost(prevState : { error : string }, formData : FormData)
{
    const c = await cookies();
    const session = c.get("session");
    const session_id = session?.value;

    const response = await axios.post(`${process.env.BACKEND_URL}/posts/create`, {
        content : formData.get("content")
    }, {
        headers : {
            'Content-Type' : 'application/json',
            'X-Session-Header' : session_id
        }
    });

    if(response.status === 200) {
        return redirect("/posts");
    }

    return {
        error : "Failed to create post"
    }
}