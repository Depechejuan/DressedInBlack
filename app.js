"use strict";

require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");

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

// Error Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).son({
        success: false,
        error: {
            code: err.code || "UNEXPECTED_ERROR",
            message: err.message || "Unexpected Error has ocurred",
        },
    });
});

// Not Found Middleware
app.use((req, res) => {
    //SendError
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} Port`);
});
