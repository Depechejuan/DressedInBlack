import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getTour from "../services/get-tour";
import Loading from "./Loading";
import Buttons from "./Edit-delete-btn";
import CreateBtn from "./Create-btn";


const host = import.meta.env.VITE_API_HOST;

function Tour() {
    const [tour, setTour] = useState([]);
    const [expandedEntries, setExpandedEntries] = useState([]);

    useEffect(()=>{
        async function fetchTour() {
            try {
                const data = await getTour();
                setTour(data.data);
            } catch (err) {
                console.error("Error fetching Tour", err);
            }
        }
        fetchTour()
    }, [])

    const toggleEntry = (tourDate) => {
        if (expandedEntries.includes(tourDate)) {
            setExpandedEntries(expandedEntries.filter((date) => date !== tourDate))
        } else {
            setExpandedEntries([...expandedEntries, tourDate])
        }
    }

    if (!tour) {
        return <Loading />
    }
    const tourByNames = tour.reduce((acc, date) => {
        if (!acc[date.tourName]) {
            acc[date.tourName] = [];
        }
        acc[date.tourName].push(date);
        return acc;
    }, {});

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
            <h2>Dressed In Black Tour History</h2>
            <article className="tour-details">
            <Link to="/dibtour">
                <CreateBtn method={'Tour'} />
            </Link>
                <ul className="tour-full">
                    {Object.keys(tourByNames).map((tourName) => (
                        <li key={tourName}>
                            <h3>{tourName}:</h3>
                            <ul className="tour-filter">
                                {tourByNames[tourName].map((date) => (
                                    <li key={date.tourDate}>
                                        <a
                                            href={`#${date.tourDate}`}
                                            onClick={() => toggleEntry(date.tourDate)}
                                        >
                                            {new Date(date.tourDate).toLocaleDateString(
                                                "es-ES",
                                                {
                                                    year: "numeric",
                                                    month: "2-digit",
                                                    day: "2-digit",
                                                }
                                            )}{" "}
                                            - {date.venue}, {date.city}, ({date.country})
                                        </a>
                                        {expandedEntries.includes(date.tourDate) && (
                                            <section className="date-details">
                                                <span>
                                                    Setlist:
                                                    <br />
                                                    {date.setlist.split("\n").map((line) => (
                                                        <p key={date.city}>{line}</p>
                                                    ))}
                                                </span>
                                                <div className="image-container">
                                                    {date.imageURL.some((image) => image !== null) ? (
                                                    date.imageURL.map((image) =>
                                                        image !== null ? (
                                                        <img
                                                            key={image.id}
                                                            src={`${host}${image}`}
                                                            alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                                            className="every-post-image"
                                                        />
                                                        ) : null
                                                    )
                                                    ) : (
                                                    <></>
                                                    )}
                                                </div>
                                                <div className="tour-video">
                                                {date.videoURL && date.videoURL.length > 0 ? (
                                                    date.videoURL.map((url) => (
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
                                                <Buttons id={date.id} data={date} type={"tour"} />
                                            </section>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}


export default Tour;