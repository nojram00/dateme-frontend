"use client"
import { createPost } from "@/actions/postActions";
import { useActionState } from "react";

export default function CreatePostBox() {

    const [state, dispatch, pending] = useActionState(createPost, null);
    return (
        <div className="card bg-base-200 w-full shadow-xl">
            <form action={dispatch} className="card-body">
                <h2>Create a new post</h2>
                <textarea className="textarea h-24 textarea-bordered" placeholder="What's on your mind?"></textarea>
                <div className="card-actions justify-end mt-10">
                    <button className="btn btn-primary" disabled={pending}>{ !pending ? "Post" : "Posting..." }</button>
                </div>
            </form>
        </div>
    );
}