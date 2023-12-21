"use strict";

module.exports = {
    getTimerForValidationCode(minutes) {
        return Date.now() + minutes * 60 * 1000;
    },
};
