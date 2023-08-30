"use strict";

const { getTourById, editTourDate } = require("../../services/db-service");

async function editTour(idPost, payload) {
    const oldTour = await getTourById(idPost);
    const updateTour = Object.assign({}, oldTour, payload);
    await editTourDate(updateTour);
    return updateTour;
}

module.exports = editTour;
