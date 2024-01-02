"use strict";

const { generateUUID } = require("../../services/crypto-services");
const {
    sendNewsletter,
    checkNewsLetter,
} = require("../../services/db-service");
const { alreadyAdded } = require("../../services/error-service");

async function newsletter(payload) {
    console.log("We are in newsletter");
    console.log(payload.email);
    const check = await checkNewsLetter(payload.email);
    console.log(check);
    if (!check) {
        const id = generateUUID();
        const data = { ...payload, id };
        const send = await sendNewsletter(data);
        return send;
    } else {
        return alreadyAdded();
    }
}

module.exports = { newsletter };
