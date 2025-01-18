import PostContainer from "./postsContainer";
import CreatePostBox from "./createPostBox";

export const metadata = {
    title : "Posts"
}

export default function Posts() {
    return (
        <div className="w-full">
            <CreatePostBox />

            <PostContainer />
        </div>
    )
}
