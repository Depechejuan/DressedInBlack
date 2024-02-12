"use strict";

const {
    deleteUniquePhotoByID,
    deleteAllPhotosByTypeID,
    getPostById,
    getTourByID,
} = require("../../services/db-service");
const { deleteFile } = require("../../services/file-service");
const { authorize } = require("../../validators/google-auth");

async function deleteType(endpoint, type, idType, idPhoto) {
    const jwtClient = await authorize();
    if (endpoint === "full") {
        if (type == "post") {
            const photos = await getPostById(idType);
            for (const photo of photos.imageURL) {
                await deleteFile(jwtClient, photo);
            }
        }
        if (type == "tour") {
            const photos = await getTourByID(idType);
            for (const photo of photos.imageURL) {
                await deleteFile(jwtClient, photo);
            }
        }
        await deleteAllPhotosByTypeID(type, idType);
    }

    if (endpoint === "unique") {
        await deleteFile(jwtClient, idPhoto);
        await deleteUniquePhotoByID(type, idPhoto);
    }
}

module.exports = deleteType;
