import deleteEntry from "../services/delete-entry";
import getToken from "../services/token/get-token";


function Buttons({id}) {
    const token = getToken()
    const handleDeleteClick = async () => {
        try {
            const type = "dibpost";
            await deleteEntry(type, id, token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <button className="developer-only-btn">Edit</button>
            <button className="developer-only-btn" >Delete</button>
        </>
    )
}

export default Buttons;