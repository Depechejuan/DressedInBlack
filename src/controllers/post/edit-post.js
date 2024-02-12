"use strict";

const {
    getPostById,
    updatePost,
    getUserById: getFullUserById,
} = require("../../services/db-service");
const { unauthorized } = require("../../services/error-service");

async function editPost(idPost, idUser, payload) {
    const originalUser = await getFullUserById(idUser);
    const oldPost = await getPostById(idPost);

    if (oldPost.idUser !== idUser && originalUser.role !== "Admin") {
        return unauthorized();
    }

    const editedPost = { ...oldPost, ...payload };
    const post = await updatePost(editedPost);
    return post;
}

module.exports = editPost;
