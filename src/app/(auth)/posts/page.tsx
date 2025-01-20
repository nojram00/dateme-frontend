import PostContainer from "./postsContainer";
import CreatePostBox from "./createPostBox";
import { PostProvider } from "@/contexts/postsContext";

export const metadata = {
    title : "Posts"
}

export default function Posts() {
    return (
        <div className="w-full">
            <PostProvider>
                <CreatePostBox />
                <PostContainer />
            </PostProvider>
        </div>
    )
}
