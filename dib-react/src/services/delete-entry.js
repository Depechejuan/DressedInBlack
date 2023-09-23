const host = import.meta.env.VITE_API_HOST;

const deleteEntry = async (type, id, token) => {
    try {
        const response = await fetch(`${host}/${type}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        });
        const body = await response.json();
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
};

export default deleteEntry;
