const { parseJWT, generateUUID } = require("../../services/crypto-services");
const { createPost, addVideoToPost } = require("../../services/db-service");
const {
    notAuth,
    incomplete,
    uploadError,
} = require("../../services/error-service");

async function newPost(data, token, res) {
    try {
        const user = parseJWT(token);

        if (!user) {
            throw notAuth();
        }

        if (!token) {
            throw notAuth();
        }

        const { title, description } = data;

        if (!title || !description) {
            throw incomplete();
        }

        const post = {
            id: generateUUID(),
            idUser: user.id,
            title: data.title,
            description: data.description,
        };
        await createPost(post);

        let videos = [];
        if (Array.isArray(data.videoURL) && data.videoURL.length > 0) {
            for (const videoURL of data.videoURL) {
                const video = {
                    id: generateUUID(),
                    videoURL,
                    idPost: post.id,
                };
                await addVideoToPost(video);
                videos.push(video);
            }
        }

        return {
            post,
        };
    } catch (err) {
        console.error(err);
        throw uploadError();
    }
}

module.exports = newPost;
