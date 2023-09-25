const host = import.meta.env.VITE_API_HOST;

async function getTour() {
    const result = await fetch(`${host}/tour`);
    const tour = await result.json();
    return tour;
}
export default getTour;
