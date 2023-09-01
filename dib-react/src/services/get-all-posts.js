const host = import.meta.env.VITE_API_HOST;

async function getAllPost() {
    const result = await fetch(`${host}/posts`);
    const post = await result.json();
    return post;
}

export default getAllPost;
