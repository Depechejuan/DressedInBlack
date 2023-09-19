import {useNavigate} from "react-router-dom"
import getToken from "../services/token/get-token"
import {useState, useEffect} from "react"
import createNewTour from "../services/create-tour";


function TourForm() {
    const [tourName, setTourName] = useState('');
    const [tourDate, setTourDate] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [venue, setVenue] = useState('');
    const [soldOut, setSoldOut] = useState(true);
    const [setlist, setSetlist] = useState('');
    const [loading, setLoading] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('');
    const [cancelMessage, setCancelMessage] = useState('');
    const navigate = useNavigate();
    const token = getToken();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    },);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newTour = {
                tourName,
                tourDate,
                city,
                country,
                venue,
                soldOut,
                setlist,
            }

            setLoading(true);
            setSubmitMessage('Enviando...')

            const response = await createNewTour(newTour, token);

            if (response.sucess == true) {
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
        setLoading(true);
        setCancelMessage('Cancelled');

        setTimeout(() => {
            setCancelMessage('');
            setLoading(false);
        }, 1000);
    }

    return (
        <>
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
                        type="text"
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
                    <input 
                        type=""
                        name=""
                        placeholder=""
                        onChange={(e) => setSoldOut(e.target.value)}
                        required
                    />
                    <textarea 
                        type="text"
                        name="Setlist"
                        placeholder="Setlist"
                        onChange={(e) => setSetlist(e.target.value)}
                        required
                    />
                    <select>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    <div className="btn-container">
                        <button
                            type="submit"
                            className={`form-btn ${loading ? 'submitted' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation()
                        }}>
                            {loading ? 'Submitted' : 'Create'}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={`cancel-button ${loading ? 'cancelled' : ''}`}
                            >
                            {loading ? 'Cancelled' : 'Cancel'}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TourForm;