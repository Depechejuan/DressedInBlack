const host = import.meta.env.VITE_API_HOST;

async function getUniqueTour(id) {
    const result = await fetch(`${host}/tour/${id}`);
    const tour = await result.json();
    return tour;
}
export default getUniqueTour;
