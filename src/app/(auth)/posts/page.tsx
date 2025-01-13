import PostContainer from "./postsContainer";
export const metadata = {
    title : "Posts"
}

export default function Posts() {
    return (
        <div className="w-full">
            Hello

            <PostContainer />
        </div>
    )
}
