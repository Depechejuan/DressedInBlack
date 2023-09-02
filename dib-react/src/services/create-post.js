const host = import.meta.env.VITE_API_HOST;

async function createNewPost(post, token) {
    try {
        const response = await fetch(`${host}/dibposts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(post),
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

export default createNewPost;
