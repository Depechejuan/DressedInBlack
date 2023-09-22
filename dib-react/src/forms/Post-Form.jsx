import { useNavigate } from "react-router-dom"; 
import { useState, useEffect, useRef } from 'react';

import getToken from "../services/token/get-token";
import createNewPost from "../services/create-post";
import sendPhoto from "../services/send-photos";

    function PostForm() {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [loading, setLoading] = useState(false);
        const [selectedPhotos, setSelectedPhotos] = useState([]);
        const [photoPreview, setPhotoPreview] = useState(null)
        const [submitting, setSubmitting] = useState(false);
        const [cancelling, setCancelling] = useState(false);
        const navigate = useNavigate();
        const token = getToken();

        const fileInputRef = useRef();

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
                let photos = selectedPhotos;
                setSubmitting(true);
                setSubmitting('Enviando...');

                const response = await createNewPost(newPost, token);

                if (response.success == true) {
                    const idPost = response.data.id;
                    const type = "dibposts";
                    console.log("idPost");
                    if (photos.length > 0) {
                        console.log("Hay fotos");
                        const photosSended = await sendPhoto(type, idPost, photos, token);
                        console.log(photosSended);
                    }
                    navigate(`/posts/${response.data.id}`)
                }
                

            } catch (err) {
                console.error(err);
            }
        }  

        const handleCancel = () => {
            setTitle('');
            setDescription('');
            fileInputRef.current.value = '';
            setSelectedPhotos([]);
            setLoading(true);
            setPhotoPreview(null)
            setLoading(true)
            setCancelling('Canceled');

            setTimeout(() => {
                setCancelling('');
                setLoading(false);
            }, 1000);
        }

        const handlePhotoChange = (e) => {
            const selectedFiles  = e.target.files;
            if (selectedFiles.length > 10) {
                alert("No puedes seleccionar más de 10 imágenes");
                e.target.value = null;
                return;
            }
    
            const newSelectedPhotos = [];
            for (let i = 0; i < selectedFiles.length; i++) {
                const selectedPhoto = selectedFiles[i];
                newSelectedPhotos.push(selectedPhoto);
            }
            setSelectedPhotos(newSelectedPhotos);
    
    
            if (selectedFiles.length > 0) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPhotoPreview(reader.result);
                };
                reader.readAsDataURL(selectedFiles[0]); // Solo muestra la previsualización de la primera foto
            } else {
                setPhotoPreview(null);
            }
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
                    <div className="custom-file-input">
                        {selectedPhotos.length > 0 && 
                        <>
                            <div className="photo-preview-container">
                                {selectedPhotos.map((photo, index) => (
                                <img
                                key={index}
                                src={URL.createObjectURL(photo)} alt="Preview"
                                className="photo-preview" />
                                ))}
                            </div>
                        </>}
                        <input 
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            multiple
                            ref={fileInputRef}
                            id="fileInput"
                            className="photo-input"
                        />
                    </div>
                    <div className="btn-container">
                        <button
                        type="submit" className={`form-btn ${submitting ? 'submitted' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}>
                            {submitting ? 'Submitted' : 'Create'}
                        </button>
                        <button
                        type="button" onClick={handleCancel}
                        className={`cancel-button ${cancelling ? 'canceled' : ''}`}>
                            {cancelling ? 'Cancelled' : 'Cancel'}
                        </button>
                    </div>
                </form>
            </section>
        )
    }

    export default PostForm;