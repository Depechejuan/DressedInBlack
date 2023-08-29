const { parseJWT, generateUUID } = require("../../services/crypto-services");
const { createPost } = require("../../services/db-service");
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

        post = {
            id: generateUUID(),
            idUser: user.id,
            title: data.title,
            description: data.description,
        };
        await createPost(post);

        return {
            post,
        };
    } catch (err) {
        console.error(err);
        sendResponse(err);
    }
}

module.exports = newPost;
