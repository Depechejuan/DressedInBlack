import deleteEntry from "../services/delete-entry";
import getToken from "../services/token/get-token";

function Buttons({id, data, type}) {
    const token = getToken();

    // const handleEditClick = async () => {
    //     if (type == "post") {

    //     }
    // }

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
            <button className="developer-only-btn">Edit</button>
            <button className="developer-only-btn" onClick={handleDeleteClick}>Delete</button>
        </>
    )
}
// 
export default Buttons;