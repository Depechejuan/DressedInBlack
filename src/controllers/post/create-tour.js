"use strict";

const { parseJWT, generateUUID } = require("../../services/crypto-services");
const { addTour, addVideoToTour } = require("../../services/db-service");
const { notAuth } = require("../../services/error-service");
const { sendResponse } = require("../../utils/send-response");

async function createTour(data, token) {
    try {
        const user = parseJWT(token);

        if (!user) {
            throw notAuth();
        }
        if (!token) {
            throw notAuth();
        }

        const newTour = {
            id: generateUUID(),
            tourName: data.tourName,
            tourDate: data.tourDate,
            city: data.city,
            country: data.country,
            venue: data.venue,
            soldOut: data.soldOut,
            setlist: data.setlist,
        };

        await addTour(newTour);

        const videos = [];
        if (Array.isArray(data.videoURL) && data.videoURL.length > 0) {
            for (const videoURL of data.videoURL) {
                const video = {
                    id: generateUUID(),
                    videoURL,
                    idTour: newTour.id,
                };
                await addVideoToTour(video);
                videos.push(video);
            }
        }

        const fullTour = { ...newTour, videos };
        return {
            fullTour,
        };
    } catch (err) {
        console.error(err);
        sendResponse(err);
    }
}

module.exports = createTour;
