import { useState, useEffect } from "react";
import getTour from "../services/get-tour";
import Loading from "./Loading";

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

    return (
            <section className="tour">
                <article className="tour-details">
                    <ul>
                        {tour.map((date, index ) => (
                            <li key={index}>
                                <a href={`#${date.tourDate}`}
                                onClick={() => toggleEntry(date.tourDate)}>
                                    {new Date(date.tourDate).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    })}{" "}
                                    - {date.venue}, {date.city}, ({date.country})
                                </a>
                                {expandedEntries.includes(date.tourDate) && (
                                <section className="date-details">
                                    <p>Setlist: {date.setlist}</p>
                                </section>
                            )}
                            </li>
                        ))}


                    </ul>
                </article>
            </section>
    );
}

export default Tour;