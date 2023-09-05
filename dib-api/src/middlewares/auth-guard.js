"use strict";

const jwt = require("jsonwebtoken");
const errorService = require("../services/error-service");

module.exports = (req, res, next) => {
    if (!req.currentUser) {
        const err = errorService.invalidCredentials();
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
    next();
};
