"use client"
import { useGet } from "@/hooks/useApi";

/**
 * @typedef {Object} Post
 * 
 * @property {string} uid - The unique identifier of the post
 * @property {string} content - The content of the post
 */
type Post = {
    uid : string;
    content : string;
}

export default function Posts() {

    const { data, loading, isError } = useGet<Post>("https://dateme-server.onrender.com/posts");

    console.log(data);

    if (loading) {
        return <div>Loading...</div>
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
