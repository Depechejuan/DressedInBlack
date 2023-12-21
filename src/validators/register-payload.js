"use strict";

const Joi = require("joi");

module.exports = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    birthday: Joi.string().required(),
    acceptedTOS: Joi.string().required(),
});
