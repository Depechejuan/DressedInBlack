"use strict";

const {
    deleteUniquePhotoByID,
    deleteAllPhotosByTypeID,
} = require("../../services/db-service");
const { deleteFile } = require("../../services/file-service");

async function deleteType(endpoint, type, idType, idPhoto) {
    if (endpoint === "full") {
        // delete local folder
        await deleteFile(endpoint, type, idType);
        // delete post by id on database
        await deleteAllPhotosByTypeID(type, idType);
    }

    // insert only 1 photo case
    if (endpoint === "unique") {
        // delete real file
        await deleteFile(endpoint, type, idType, idPhoto);
        // delete entry on the database
        await deleteUniquePhotoByID(type, idPhoto);
    }
}

module.exports = deleteType;
