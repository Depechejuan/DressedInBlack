"use strict";

const {
    getPostById,
    updatePost,
    getUserById: getFullUserById,
} = require("../../services/db-service");
const { unauthorized, uploadError } = require("../../services/error-service");

async function editPost(idPost, idUser, payload) {
    try {
        const originalUser = await getFullUserById(idUser);
        const oldPost = await getPostById(idPost);

        if (oldPost.idUser !== idUser && originalUser.role !== "Admin") {
            throw unauthorized();
        }

        const editedPost = { ...oldPost, ...payload };
        const post = await updatePost(editedPost);
        return post;
    } catch (err) {
        throw uploadError();
    }
}

module.exports = editPost;
