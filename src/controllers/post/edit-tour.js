"use strict";

const { generateUUID } = require("../../services/crypto-services");
const {
    getTourByID,
    editTourDate,
    deleteURLfromTour,
    addVideoToTour,
} = require("../../services/db-service");
const { uploadError } = require("../../services/error-service");

async function editTour(idTour, payload) {
    try {
        const oldTour = await getTourByID(idTour);
        const updateTour = Object.assign({}, oldTour, payload);

        await editTourDate(updateTour);
        await deleteURLfromTour(idTour);

        const videos = [];
        if (
            Array.isArray(updateTour.videoURL) &&
            updateTour.videoURL.length > 0
        ) {
            for (const videoURL of updateTour.videoURL) {
                const video = {
                    id: generateUUID(),
                    videoURL,
                    idTour: updateTour.id,
                };
                await addVideoToTour(video);
                videos.push(video);
            }
        }

        const editedTour = { ...updateTour, videos };
        return { editedTour };
    } catch (err) {
        throw uploadError();
    }
}

module.exports = editTour;
