"use client"
import { useGet } from "@/hooks/useApi";
import Link from "next/link";

type Response = {
    data : Post[];
    current_page : number;
    total_pages : number;
}

type Profile = {
    uid : string;
    username : string;
    first_name : string;
    last_name : string;
    email : string;
}


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
    user_info : Profile;
}

export default function Posts() {

    const { data, loading, isError } = useGet<Response>("https://dateme-server.onrender.com/posts");

    console.log("Data: ",data);

    if (loading) {
        return (
            <div className="p-5 w-full flex flex-col">
                <div className="card bg-base-200 w-full shadow-xl">
                    <div className="card-body">
                        <div className="w-full flex flex-col gap-1">
                            <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md skeleton"></span>
                            <span className="h-5 max-w-lg w-full bg-gray-400 rounded-md skeleton"></span>
                        </div>
                        <hr className="border-t-2 my-4 border-gray-200"/>
                        <p className="h-20 max-w-lg w-full bg-gray-400 rounded-md skeleton"></p>
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
        <div className="p-5 w-full flex flex-col gap-6">
            { data && data.data.map((post, index) => {
                return (
                    <div className="card bg-base-200 w-full shadow-xl" key={index}>
                        <div className="card-body">
                        <Link className="flex flex-col gap-1 hover:underline" href={`/profile/${post.user_info.uid}`}>
                            <span>{post.user_info.first_name} {post.user_info.last_name}</span>
                            <span>@{post.user_info.username}</span>
                        </Link>
                            <hr className="border-t-2 my-4 border-gray-200"/>
                            <p>{ post.content}</p>
                            <div className="card-actions justify-end mt-10">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <div>
                <Paginator current_page={data.current_page} total_pages={data.total_pages}/>
            </div>
        </div>
    );
}

const Paginator = ({ current_page, total_pages } : { current_page : number, total_pages : number }) => {
    return (
        <div className="flex justify-center gap-2">
            <button disabled={current_page === 1} className="btn btn-primary">Previous</button>
            <button disabled={current_page === total_pages} className="btn btn-primary">Next</button>
        </div>
    );
}