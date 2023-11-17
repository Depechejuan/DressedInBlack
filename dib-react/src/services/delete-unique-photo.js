const host = import.meta.env.VITE_API_HOST;

const deleteUniquePhoto = async (idPhoto, token) => {
    console.log(idPhoto);
    // idPhoto includes slash (/) on text so it's not needed
    try {
        const response = await fetch(`${host}${idPhoto}`, {
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
        console.log(err);
    }
};

export default deleteUniquePhoto;
