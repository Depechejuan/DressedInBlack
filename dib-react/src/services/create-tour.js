const host = import.meta.env.VITE_API_HOST;

async function createNewTour(tour, token) {
    try {
        const response = await fetch(`${host}/tour`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(tour),
        });
        const body = await response.json();
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
}
export default createNewTour;
