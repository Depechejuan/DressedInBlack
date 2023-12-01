import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUniqueTour from "../services/get-unique-tour";
import EditTourForm from "../forms/Tour-Edit";
import getToken from "../services/token/get-token";
import deleteUniquePhoto from "../services/delete-unique-photo";

const host = import.meta.env.VITE_API_HOST;

function UniqueTour() {
    const [tour, setTour] = useState({});
    const {id} = useParams();
    const token = getToken();

    useEffect(()=> {
        async function fetchTour() {
            try {
                const data = await getUniqueTour(id)
                setTour(data.data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchTour();
    }, [id]);

    function deletePhoto(idPhoto) {
        deleteUniquePhoto(idPhoto, token)
    }

    function getVideoId(url) {
        const parts = url.split("v=");
        if (parts.length === 2) {
            return parts[1];
        } else {
            return null;
        }
    }

    return (
        <section className="tour-container">
            <article className="unique-tour-detail">
                <h3 className="tour-name-title">{tour.tourName}</h3>
            <h4 className="tour-city-title">
                {new Date(tour.tourDate).toLocaleDateString(
                    "es-ES",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }
                )} {tour.venue}, {tour.city}, ({tour.country})
            </h4>
            <section className="date-details">
            <span>
                Setlist:
                <br />
                {tour.setlist && tour.setlist.split("\n").map((line) => (
                    <p key={line.id}>{line}</p>
                ))}
            </span>
            <div className="image-container">
                {tour.imageURL && tour.imageURL.some((image) => image !== null) ? (
                    tour.imageURL.map((image) =>
                        image !== null ? (
                            <>
                                <img
                                    key={image.id}
                                    src={`${host}${image}`}
                                    alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                    className="every-post-image"
                                />
                                {token && (
                                    <button
                                        className="delete-photo-button"
                                        onClick={() => deletePhoto(image)}
                                    >
                                        X
                                    </button>
                                )}
                            </>
                        ) : null
                    )
                ) : (
                    <></>
                )}
            </div>
            {console.log(tour)}
            <div className="tour-video">
                {tour.videoURL && tour.videoURL.length > 0 ? (
                    tour.videoURL.map((url) => (
                        <iframe
                            key={url.id}
                            className="video-container"
                            src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                            title="Dressed In Black - Tributo a DEPECHE MODE"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
            </section>
            </article>
            <EditTourForm tourData={tour} id={id} />
        </section>
    )
}

export default UniqueTour;