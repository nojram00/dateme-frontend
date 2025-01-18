"use client"
import { useGet } from "@/hooks/useApi";
import Link from "next/link";

/**
 * @typedef {Object} Post
 * 
 * @property {string} uid - The unique identifier of the post
 * @property {string} content - The content of the post
 */
type Post = {
    post_id : string;
    user_id : string;
    content : string;
    likes : number;
}

export default function Posts() {

    const { data, loading, isError } = useGet<Post[]>("https://dateme-server.onrender.com/posts");

    console.log(data);

    if (loading) {
        return (
            <div className="p-5 w-full flex flex-col">
                <div className="card bg-base-200 w-full shadow-xl">
                    <div className="card-body">
                        <div className="w-full flex flex-col gap-1">
                            <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md"></span>
                            <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md"></span>
                        </div>
                        <hr className="border-t-2 my-4 border-gray-200"/>
                        <p className="h-20 max-w-lg w-full bg-gray-400 rounded-md"></p>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn btn-primary">...</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <div className="p-5 w-full flex flex-col">
            { data && data.map((post, index) => {
                return (
                    <div className="card bg-base-200 w-full shadow-xl" key={index}>
                        <div className="card-body">
                            <ProfileShit uid={post.user_id} />
                            <hr className="border-t-2 my-4 border-gray-200"/>
                            <p>{ post.content}</p>
                            <div className="card-actions justify-end mt-10">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

 
type Profile = {
    uid : string;
    username : string;
    first_name : string;
    last_name : string;
    email : string;
}

function ProfileShit({ uid } : { uid : string })
{
    const { data, loading, isError } = useGet<Profile>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${uid}`);

    if (loading) {
        return (
            <div className="w-full flex flex-col gap-1">
                <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md"></span>
                <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md"></span>
            </div>
        );
    }

    return(
        <Link className="flex flex-col gap-1 hover:underline" href={`/profile/${data.uid}`}>
            <span>{data.first_name} {data.last_name}</span>
            <span>@{data.username}</span>
        </Link>
    )
}