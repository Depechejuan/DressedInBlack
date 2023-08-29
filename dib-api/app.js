"use strict";

require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const { sendError } = require("./src/utils/send-error.js");
const validateToken = require("./src/middlewares/validate-token.js");
const appRouter = require("./src/routes/app-router.js");

const app = express();
const PORT = 3000;

app.use(
    cors({
        origin: [
            "localhost:3000",
            "localhost:5174",
            "localhost:5173",
            "localhost:5500",
        ],
    })
);

app.use(express.json());
app.use(validateToken);
app.use(appRouter);

// Error Middleware
app.use((err, req, res, next) => {
    console.log(err);
    sendError(res, err);
});

// Not Found Middleware
app.use((req, res) => {
    sendError(res, {
        status: 404,
        code: "UNKNOWN_ENDPOINT",
        message: `Unknown Endpoint: ${req.method} ${req.path}`,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
