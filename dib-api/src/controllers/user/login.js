"use strict";

const jwt = require("jsonwebtoken");
const { getConnection } = require("../../database/mysql-connection");
const validateToken = require("../../middlewares/validate-token");
const {
    validatePassword,
    generateJWT,
} = require("../../services/crypto-services");
const { getUserByEmail } = require("../../services/db-service");
const {
    invalidCredentials,
    emailNotValidated,
} = require("../../services/error-service");

async function login({ email, plainPassword }) {
    const user = await getUserByEmail(email);

    if (!user) {
        invalidCredentials();
    }
    if (!user.emailValidated) {
        emailNotValidated();
    }
    const valid = await validatePassword(plainPassword, user.password);
    if (!valid) {
        invalidCredentials();
    }

    const token = generateJWT({
        id: user.id,
        email: user.email,
        name: user.name,
    });

    return token;
}
module.exports = { login };
