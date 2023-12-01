import {useState, useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"

import getToken from "../services/token/get-token"
import sendPhoto from "../services/send-photos";
import editTour from "../services/edit-tour";

function EditTourForm({ tourData, id }) {
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

    const fileInputRef = useRef();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    },);

    useEffect(() => {
        if (tourData) {
            setTourName(tourData.tourName || '');
            setTourDate(tourData.tourDate ? new Date(tourData.tourDate).toISOString().split('T')[0] : '');
            setCity(tourData.city || '');
            setCountry(tourData.country || '');
            setVenue(tourData.venue || '');
            setSoldOut(tourData.souldOut || true);
            setSetlist(tourData.setlist || '');
            setYoutubeLinks(tourData.videoURL || [""]);
        }
    }, [tourData]);

    const handleAddMore = () => {
        setYoutubeLinks(prevLinks => [...prevLinks, ""]);
    };
    
    const handleRemoveLast = () => {
        if (youtubeLinks.length > 1) {
            setYoutubeLinks(prevLinks => prevLinks.slice(0, -1));
        }
    };
    
    const handleYoutubeLinkChange = (e, index) => {
        setYoutubeLinks(prevLinks => {
            const newLinks = [...prevLinks];
            newLinks[index] = e.target.value;
            return newLinks;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tourEdit = {
                tourName,
                tourDate,
                city,
                country,
                venue,
                soldOut,
                setlist,
                videoURL: youtubeLinks,
            }
            let photos = selectedPhotos;
            setSubmitting(true);
            setSubmitting("Enviando...");

            const response = await editTour(id, tourEdit, token);

            if (response.success == true) {
                const idTour = id;
                const type = "tour";

                if (photos.length == 0) {
                    navigate(`/tour`);
                }

                if (photos.length > 0) {
                    console.log("cumple este if");
                    const photosSended = await sendPhoto(type, idTour, photos, token);
                    console.log(photosSended);
                    if (photosSended.success == true) {
                        navigate(`/tour`);
                    } else {
                        console.log("Error sending photo:", photosSended.error);
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
            {console.log(tourName)}
            <input 
                type="text"
                name="tourName"
                placeholder="Tour Name"
                value={tourName}  // Utiliza el estado local en lugar de tourData.tourName
                onChange={(e) => setTourName(e.target.value)}
                required
                />
            <input 
                type="date"
                name="tourDate"
                placeholder="Tour Date"
                onChange={(e) => setTourDate(e.target.value)}
                value={tourDate} // TOFIX
                required
            />
            <input 
                type="text"
                name="city"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
            />
            <input 
                type="text"
                name="country"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                required
            />
            <input 
                type="text"
                name="venue"
                placeholder="Venue"
                onChange={(e) => setVenue(e.target.value)}
                value={venue}
                required
            />
            <textarea 
                type="text"
                name="Setlist"
                placeholder="Setlist"
                onChange={(e) => setSetlist(e.target.value)}
                value={setlist}
                required
            />

            {youtubeLinks.map((link, index) => (
                <input
                    key={link.id}
                    type="text"
                    name={`youtubeLink${link}`}
                    placeholder="Youtube URL"
                    className="youtube"
                    value={youtubeLinks ? youtubeLinks[index] : link}
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
                            src={URL.createObjectURL(photo)} alt="Preview"
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

export default EditTourForm;