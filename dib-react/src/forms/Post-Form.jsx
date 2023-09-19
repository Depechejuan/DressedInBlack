import { useNavigate } from "react-router-dom"; 
import getToken from "../services/token/get-token";
import { useState, useEffect } from 'react';
import createNewPost from "../services/create-post";

import "../styles/forms.css"

    function PostForm() {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [loading, setLoading] = useState(false);
        const [submitMessage, setSubmitMessage] = useState('');
        const [cancelMessage, setCancelMessage] = useState('');
        const navigate = useNavigate();
        const token = getToken();

        useEffect(() => {
            if (!token) {
                navigate("/")
            }
        },);
        

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const newPost = {
                    title: title,
                    description: description,
                };
                setLoading(true);
                setSubmitMessage('Enviando...');

                const response = await createNewPost(newPost, token);

                if (response.success == true) {
                    navigate(`/posts/${response.data.id}`);
                }
                

            } catch (err) {
                console.error(err);
            }
        }  

        const handleCancel = () => {
            setTitle('');
            setDescription('');
            setLoading(true);
            setCancelMessage('Canceled');

            setTimeout(() => {
                setCancelMessage('');
                setLoading(false);
            }, 1000);
        }

        return(
            <section className="form">
                <form className="create-post-form" method="post" onSubmit={handleSubmit}>
                    <h3 className="create-post-title">Post</h3>
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea 
                        type="text"
                        name="description"
                        placeholder="text"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <div className="btn-container">
                        <button
                        type="submit" className={`form-btn ${loading ? 'submitted' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}>
                            {loading ? 'Submitted' : 'Create'}
                        </button>
                        <button
                        type="button" onClick={handleCancel}
                        className={`cancel-button ${loading ? 'canceled' : ''}`}>
                            {loading ? 'Canceled' : 'Cancel'}
                        </button>
                    </div>
                </form>
            </section>
        )
    }

    export default PostForm;