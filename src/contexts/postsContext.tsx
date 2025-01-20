"use client"

import React, { createContext } from 'react';

export type Response = {
    data : Post[];
    current_page : number;
    total_pages : number;
}

export type Profile = {
    uid : string;
    username : string;
    first_name : string;
    last_name : string;
    email : string;
}

export type Post = {
    post_id : string;
    user_id : string;
    content : string;
    likes : number;
    user_info : Profile;
    user_likes : string[];
}


type PostContextProps = {
    response : Response;
    updateResponse : (newResponse : Response) => void;
}



export const PostContext = createContext<PostContextProps | undefined>(undefined);
export const PostProvider = ({children} : { children : React.ReactNode }) => {

    const [response, setResponse] = React.useState<Response>({
        data : [],
        current_page : 1,
        total_pages : 1
    });

    const updateResponse = (newResponse : Response) => {
        setResponse(newResponse);
    }

    return (
        <PostContext.Provider value={{response, updateResponse}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePostContext = () => {
    const context = React.useContext(PostContext);
    if (context === undefined) {
        throw new Error("usePostContext must be used within a PostProvider");
    }
    return context;
}