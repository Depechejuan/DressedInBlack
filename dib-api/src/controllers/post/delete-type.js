"use strict";

const {
    deleteUniquePhotoByID,
    deleteAllPhotosByTypeID,
} = require("../../services/db-service");
const { deleteFile } = require("../../services/file-service");

async function deleteType(endpoint, type, id, idPhotos) {
    if (endpoint === "full") {
        // delete local folder
        await deleteFile(endpoint, type, id);
        // delete post by id on database
        await deleteAllPhotosByTypeID(type, id);
    }

    // insert only 1 photo case
}

module.exports = deleteType;
