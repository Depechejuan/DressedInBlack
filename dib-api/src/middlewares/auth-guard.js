"use strict";

const errorService = require("../services/error-service");

module.exports = (req, res, next) => {
    console.log(req.currentUser);
    if (!req.currentUser) {
        const err = errorService.invalidCredentials();
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
    next();
};
