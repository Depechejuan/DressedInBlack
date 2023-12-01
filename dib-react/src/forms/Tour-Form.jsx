import {useState, useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"

import createNewTour from "../services/create-tour";
import getToken from "../services/token/get-token"
import sendPhoto from "../services/send-photos";

function TourForm() {
    const [tourName, setTourName] = useState('');
    const [tourDate, setTourDate] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [venue, setVenue] = useState('');
    const [soldOut, setSoldOut] = useState(true);
    const [setlist, setSetlist] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [youtubeLinks, setYoutubeLinks] = useState([""]);
    const [submitting, setSubmitting] = useState(false);
    const [cancelling, setCancelling] = useState(false);
    const navigate = useNavigate();
    const token = getToken();

    const fileInputRef = useRef()

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    },);

    const handleAddMore = () => {
        setYoutubeLinks([...youtubeLinks, ""]);
    };

    const handleRemoveLast = () => {
        if (youtubeLinks.length > 1) {
            const newLinks = [...youtubeLinks];
            newLinks.pop();
            setYoutubeLinks(newLinks);
        }
    };

    const handleYoutubeLinkChange = (e, index) => {
        const newLinks = [...youtubeLinks];
        newLinks[index] = e.target.value;
        setYoutubeLinks(newLinks);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const filteredLinks = youtubeLinks.filter((link) => link.trim() !== '');
            const newTour = {
                tourName,
                tourDate,
                city,
                country,
                venue,
                soldOut,
                setlist,
                videoURL: filteredLinks.length > 0 ? filteredLinks : undefined,
            }
            let photos = selectedPhotos;
            setSubmitting(true);
            setSubmitting("Enviando...");

            const response = await createNewTour(newTour, token);
            if (response.success == true) {
                const idTour = response.data.fullTour.id;
                const type = "tour";

                if (photos.length == 0) {
                    navigate(`/tour`);
                }

                if (photos.length > 0) {
                    const photosSended = await sendPhoto(type, idTour, photos, token);
                    if (photosSended.ok == true) {
                        navigate(`/tour`);
                    } else {
                        console.error("Error sending photo:", photosSended.error);
                    }
                }
                navigate(`/tour`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancel = () => {
        setTourName('');
        setTourDate('');
        setCity('');
        setCountry('');
        setVenue('');
        setSoldOut(true);
        setSetlist('');
        fileInputRef.current.value = '';
        setSelectedPhotos([])
        setPhotoPreview(null)
        setYoutubeLinks([''])
        setLoading(true);
        setCancelling('Cancelled');

        setTimeout(() => {
            setCancelling(false);
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


    return (
            <section className="form">
                <form className="create-tour-form" method="post" onSubmit={handleSubmit}>
                    <h3 className="create-tour-date">
                        Tour
                    </h3>
                    <input 
                        type="text"
                        name="tourName"
                        placeholder="Tour Name"
                        onChange={(e) => setTourName(e.target.value)}
                        required
                    />
                    <input 
                        type="date"
                        name="tourDate"
                        placeholder="Tour Date"
                        onChange={(e) => setTourDate(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        name="country"
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        name="venue"
                        placeholder="Venue"
                        onChange={(e) => setVenue(e.target.value)}
                        required
                    />
                    <textarea 
                        type="text"
                        name="Setlist"
                        placeholder="Setlist"
                        onChange={(e) => setSetlist(e.target.value)}
                        required
                    />

                {youtubeLinks.map((link, index) => (
                        <input
                            key={link.id}
                            type="text"
                            name={`youtubeLink${link}`}
                            placeholder="Youtube URL"
                            className="youtube"
                            value={link}
                            onChange={(e) => handleYoutubeLinkChange(e, index)}
                        />
                ))}
                <div>
                    <button type="button" onClick={handleAddMore} className="add-button">
                        Añadir más
                    </button>
                    {youtubeLinks.length > 1 && (
                        <button type="button" onClick={handleRemoveLast} className="remove-button">
                            Eliminar último
                        </button>
                    )}
                </div>

                    <select className="form-boolean">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    <div className="custom-file-input">
                            {selectedPhotos.length > 0 && 
                                <div className="photo-preview-container">
                                    {selectedPhotos.map((photo) => (
                                    <img
                                    key={photo.id}
                                    src={URL.createObjectURL(photo)}
                                    alt="Preview"
                                    className="photo-preview" />
                                    ))}
                                </div>}
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
                            type="submit"
                            className={`form-btn ${submitting ? 'submitted' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation()
                        }}>
                            {submitting ? 'Submitted' : 'Create'}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={`cancel-button ${cancelling ? 'cancelled' : ''}`}
                            >
                            {cancelling ? 'Cancelled' : 'Cancel'}
                        </button>
                    </div>
                </form>
            </section>
    )
}

export default TourForm;