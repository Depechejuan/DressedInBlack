import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import getUniquePost from "../services/get-unique-post";
import Buttons from "./edit-delete-btn";
import getToken from "../services/token/get-token";

function UniquePost() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const token = getToken();

    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await getUniquePost(id);
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }
        fetchPost();
    }, [id]);

    console.log(post.data);
    if (!post.data) {
        return <Loading />;
    }
    
    return(
            <article className="unique-post-detail">
                <h3 className="post-title">{post.data.title}</h3>
                <p className="post-date">{post.data.createdAt}</p>
                <p className="post-description">{post.data.description}</p>
                {token && <Buttons />}
            </article>
    )
}

export default UniquePost;