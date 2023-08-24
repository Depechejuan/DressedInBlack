"use strict";

async function handleAsyncError(controllerFn) {
    return async (req, res, next) => {
        try {
            await controllerFn(req, res);
        } catch (err) {
            next(err);
        }
    };
}

module.exports = { handleAsyncError };
