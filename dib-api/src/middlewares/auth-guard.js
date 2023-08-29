"use strict";

const jwt = require("jsonwebtoken");
const errorService = require("../services/error-service");
const { sendResponse } = require("../utils/send-response");

module.exports = (req, res, next) => {
    if (!req.currentUser) {
        const err = errorService.invalidCredentials();
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
    next();
};

// const SECRET_KEY = process.env.JWT_SECRET;

// module.exports = (req, res, next) => {
//     console.log("Auth Guard");
//     console.log(req.currentUser);
//     console.log(req.params);
//     console.log(req.headers.authorization);
//     const authHeader = req.headers["Authorization"];
//     if (!authHeader) {
//         const err = errorService.notAuth();
//         return sendResponse(res, err.message);
//     }

//     const token = authHeader.split(" ")[1];
//     try {
//         const decodedToken = jwt.verify(token, SECRET_KEY);
//         next();
//     } catch (err) {
//         errorService.invalidCredentials();
//         return sendResponse(res, err.message);
//     }
// };
