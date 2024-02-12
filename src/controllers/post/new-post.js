const { parseJWT, generateUUID } = require("../../services/crypto-services");
const { createPost, addVideoToPost } = require("../../services/db-service");
const { notAuth, incomplete } = require("../../services/error-service");
const { sendResponse } = require("../../utils/send-response");

async function newPost(data, token, res) {
    try {
        const user = parseJWT(token);

        if (!user) {
            notAuth();
        }

        if (!token) {
            notAuth();
        }

        const { title, description } = data;

        if (!title || !description) {
            incomplete();
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
        sendResponse(err);
    }
}

module.exports = newPost;
