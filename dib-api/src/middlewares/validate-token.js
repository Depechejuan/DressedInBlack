"use strict";

const { parseJWT } = require("../services/crypto-services");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const user = token ? parseJWT(token) : null;
    req.currentUser = user;
    next();
};
