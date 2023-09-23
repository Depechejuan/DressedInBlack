"use strict";

const { deleteUniquePhotoByID } = require("../../services/db-service");

async function deleteType(type, idPhotos) {
    if (type == "post") {
        for (const id of idPhotos) {
            await deleteUniquePhotoByID(id);
        }
    }

    if (type == "tour") {
        // deletePhotoByTourID(idType);
    }
}

module.exports = deleteType;
