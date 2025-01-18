"use server"
import { cookies } from 'next/headers';
import axios from 'axios';

export async function checkSession()
{
    const c = await cookies();
    const session = c.get("session");

    if(session === undefined || session === null) return {
        success : false,
        data : null
    };

    const session_id = session.value;

    try{
        const response = await axios.get(`${process.env.BACKEND_URL}/users/get_session`, {
            headers : {
                'Content-Type' : 'application/json',
                'X-Session-Header' : session_id
            }
        });


        if(response.status === 200) {
            console.log("Session shit: ", response.data);
            return {
                success : true,
                data : response.data
            }
        }

        else {
            return {
                success : false,
                data : null
            }
        }
    }
    catch(e) {
        console.error(e);
        return {
            success : false,
            data : null
        }
    }


}
