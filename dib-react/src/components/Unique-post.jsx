import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import getUniquePost from "../services/get-unique-post";
import getToken from "../services/token/get-token";
import Dates from "./Dates";
import EditPost from "../forms/Edit-Post";

const host = import.meta.env.VITE_API_HOST;

function UniquePost() {
    const [post, setPost] = useState({});
    const [isEditPostVisible, setIsEditPostVisible] = useState(false);

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
    console.log(post);

    const handleEditClick = () => {
        setIsEditPostVisible(!isEditPostVisible);
    }
    
    const handleEditPostHide = () => {
        setIsEditPostVisible(false);
    }

    const updatePost = (updatedPost) => {
        setPost(updatedPost);
    };

    if (!post?.data) {
        return <Loading />;
    }
    
    return(
            <article className="unique-post-detail">
                <h3 className="post-title">{post.data.title}</h3>
                <Dates date={post.data.createdAt} />
                <p className="post-description">{post.data.description}</p>
                <div className="image-container">
                    <figure className="post-images">
                        {post.data.imageURL.some((image) => image !== null) ? (
                        post.data.imageURL.map((image, index) =>
                            image !== null ? (
                            <img
                                key={index}
                                src={`${host}${image}`}
                                alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                className="every-post-image"
                            />
                            ) : null
                        )
                        ) : (
                        <></>
                        )}
                    </figure>
                </div>
                {token && <button className="developer-only-btn" onClick={handleEditClick}>Enable Edit</button>}
                
                {isEditPostVisible && (
                <EditPost
                    id={id}
                    data={post.data}
                    onHide={handleEditPostHide}
                    updatePost={updatePost}
                    post={post} // Pasa el estado 'post'
                />
                )}
            </article>
    )
}

export default UniquePost;