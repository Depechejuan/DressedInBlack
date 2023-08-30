"use strict";

const { parseJWT, generateUUID } = require("../../services/crypto-services");
const { addTour } = require("../../services/db-service");
const { notAuth } = require("../../services/error-service");
const { sendResponse } = require("../../utils/send-response");

async function createTour(data, token) {
    try {
        console.log(data);
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

        console.log(newTour);

        await addTour(newTour);
        return {
            newTour,
        };
    } catch (err) {
        console.error(err);
        sendResponse(err);
    }
}

module.exports = createTour;
