const host = import.meta.env.VITE_API_HOST;

async function getUniquePost(id) {
    const result = await fetch(`${host}/dibposts/${id}`);
    const post = await result.json();
    return post;
}

export default getUniquePost;
