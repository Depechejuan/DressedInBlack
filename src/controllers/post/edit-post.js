"use strict";

const {
    getPostById,
    updatePost,
    getUserById: getFullUserById,
} = require("../../services/db-service");
const { unauthorized } = require("../../services/error-service");

async function editPost(idPost, idUser, payload) {
    const originalUser = await getFullUserById(idUser);
    console.log(originalUser);
    const oldPost = await getPostById(idPost);

    if (oldPost.idUser !== idUser && originalUser.role !== "Admin") {
        return unauthorized();
    }

    const editedPost = Object.assign({}, oldPost, payload);
    const post = await updatePost(editedPost);
    return post;
}

module.exports = editPost;
