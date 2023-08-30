"use strict";

const { getPostById, updatePost } = require("../../services/db-service");
const { unauthorized } = require("../../services/error-service");

async function editPost(idPost, idUser, payload) {
    const oldPost = await getPostById(idPost);
    if (oldPost.idUser !== idUser) {
        return unauthorized();
    }

    const editedPost = Object.assign({}, oldPost, payload);
    const post = await updatePost(editedPost);
    console.log("post en editpost", post);
    return post;
}

module.exports = editPost;
