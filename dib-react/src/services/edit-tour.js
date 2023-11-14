const host = import.meta.env.VITE_API_HOST;

const editTour = async (idTour, data, token) => {
    try {
        const response = await fetch(`${host}/tour/${idTour}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(data),
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

export default editTour;
