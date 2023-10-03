import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUniqueTour from "../services/get-unique-tour";

const host = import.meta.env.VITE_API_HOST;

function UniqueTour() {
    const [tour, setTour] = useState({});


    const {id} = useParams();


    async function fetchTour() {
        try {
            const data = await getUniqueTour(id)
            setTour(data.data)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTour();
    })

    console.log(tour.setlist);

    return (
        <section className="tour-container">
            <article className="unique-tour-detail">
                <h3>{tour.tourName}</h3>
            <h4>
                {new Date(tour.tourDate).toLocaleDateString(
                    "es-ES",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }
                )} {tour.venue}, {tour.city}, ({tour.country})
            </h4>
            <section>
            <span>
                Setlist:
                {/* <br />
                {tour.setlist.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                ))} */}
            </span>
            <figure className="tour-photos">
                {/* {tour.imageURL.map((image, index) => (
                    <img
                        key={index}
                        src={`${host}${image}`}
                        alt="Dressed In Black - Tributo a DEPECHE MODE"
                    />
                ))} */}
            </figure>
            </section>
            </article>
        </section>
    )
}

export default UniqueTour;