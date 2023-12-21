"use strict";

const parseJWT = require("../services/crypto-services.js").parseJWT;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const user = parseJWT(token);
        if (user) {
            req.currentUser = user;
        } else {
            req.currentUser = null;
        }
    } else {
        req.currentUser = null;
    }
    next();
};
