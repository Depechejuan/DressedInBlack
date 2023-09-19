import { useState, useEffect } from "react";
import getTour from "../services/get-tour";
import Loading from "./Loading";
import Buttons from "./Edit-delete-btn";

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

    return (
        <>
            <article className="tour-details">
                <ul className="tour-full">
                    {Object.keys(tourByNames).map((tourName) => (
                        <li key={tourName}>
                            <h2>{tourName}:</h2>
                            <ul className="tour-filter">
                                {tourByNames[tourName].map((date, index) => (
                                    <>
                                    <li key={index}>
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
                                                    {date.setlist.split("\n").map((line, i) => (
                                                        <p key={i + index}>{line}</p>
                                                    ))}
                                                </span>
                                                <figure className="tour-photos">
                                                    {date.imageURL.map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={`${host}${image}`}
                                                            alt="Dressed In Black - Tributo a DEPECHE MODE"
                                                        />
                                                    ))}
                                                </figure>
                                            </section>
                                        )}
                                    </li>
                                    <Buttons />
                                    </>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
}


export default Tour;