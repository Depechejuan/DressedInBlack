"use strict";

const {
    deleteUniquePhotoByID,
    deleteAllPhotosByTypeID,
} = require("../../services/db-service");
const { deleteFile } = require("../../services/file-service");

/* 
    This needs a change, since the delete file isn't local anymore. I just change only the deletion of the DATABASE, but not the real pic remotely.
    TODO: Find out how to delete online pics
*/
async function deleteType(endpoint, type, idType, idPhoto) {
    if (endpoint === "full") {
        const url = `${type}/${idType}/${idPhoto}.webp`;
        // delete local folder
        await deleteFile(endpoint, type, idType);
        // delete post by id on database
        await deleteAllPhotosByTypeID(type, url);
    }

    // insert only 1 photo case
    if (endpoint === "unique") {
        // delete real file
        await deleteFile(endpoint, type, idType, idPhoto);
        // delete entry on the database.
        const url = `${type}/${idType}/${idPhoto}.webp`;
        await deleteUniquePhotoByID(type, url);
    }
}

module.exports = deleteType;
