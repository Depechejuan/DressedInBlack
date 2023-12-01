import deleteEntry from "../services/delete-entry";
import getToken from "../services/token/get-token";
import { useNavigate } from "react-router-dom";

function Buttons({id, type}) {
    const token = getToken();
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/tour/${id}`)
    };



    const handleDeleteClick = async () => {
        try {
            console.log(type, id, token);
            await deleteEntry(type, id, token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            {token ? (
                <>
                    <button className="developer-only-btn" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button className="developer-only-btn" onClick={handleDeleteClick}>
                        Delete
                    </button>
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Buttons;