import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import getToken from "../services/token/get-token";
import editPost from "../services/edit-post";
import sendPhoto from "../services/send-photos";

const host = import.meta.env.VITE_API_HOST;

const EditPost = ({ id, data, onHide, updatePost, post }) => {
    const [title, setTitle] = useState(data.title || "");
    const [description, setDescription] = useState(data.description || "");
    const [loading, setLoading] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [cancelling, setCancelling] = useState(false);

    const navigate = useNavigate();
    const token = getToken();
    const fileInputRef = useRef();

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    },)

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
    
        const response = await editPost(id, newPost, token);
    
        if (response.success) {
            updatePost({
                ...post,
                data: {
                ...post.data,
                title: newPost.title,
                description: newPost.description,
                imageURL: [...post.data.imageURL, ...photos],
                },
            });
            const type = "dibposts";
            if (photos.length > 0) {
            await sendPhoto(type, id, photos, token);
            }
            console.log(newPost);
            console.log("Ocultar el edit");
            onHide();
        }
        
        } catch (err) {
        console.error(err);
        }
    };



    const handleCancel = () => {
        setTitle("");
        setDescription("");
        fileInputRef.current.value = "";
        setSelectedPhotos([]);
        setLoading(true);
        setCancelling("Canceled");
    
        setTimeout(() => {
            setCancelling("");
            setLoading(false);
        }, 1000);
    };

    const handlePhotoChange = (e) => {
        const selectedFiles = e.target.files;
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
    };
    
    return (
        <section className="form">
        <form className="edit-post-form" method="post" onSubmit={handleSubmit}>
            <h3 className="edit-post-title">Post</h3>
            <input 
                type="text"
                name="title"
                placeholder="title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea 
                type="text"
                name="description"
                placeholder="text"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            {/* Sección para las imágenes existentes */}
        <div className="existing-photos">
        <p>Fotos previas</p>
        {data.imageURL.map((image, index) => (
            <img
            key={index}
            src={`${host}${image}`}
            alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
            className="photo-preview"
            />
        ))}
        </div>
        
        {/* Sección para las nuevas imágenes */}
        <div className="custom-file-input">
        <p>Nuevas Fotos</p>
            {selectedPhotos.length > 0 && (
                <div className="photo-preview-container">
                {selectedPhotos.map((photo, index) => (
                    <img
                    key={index}
                    src={URL.createObjectURL(photo)}
                    alt="Preview"
                    className="photo-preview"
                    />
                ))}
                </div>
            )}
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
                    {submitting ? 'Submitted' : 'Edit'}
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

export default EditPost;