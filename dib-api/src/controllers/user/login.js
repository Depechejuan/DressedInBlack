"use strict";

const jwt = require("jsonwebtoken");
const { getConnection } = require("../../database/mysql-connection");
const validateToken = require("../../middlewares/validate-token");
const {
    validatePassword,
    generateJWT,
} = require("../../services/crypto-services");
const { getUserByEmailUNSAFE } = require("../../services/db-service");
const {
    invalidCredentials,
    emailNotValidated,
} = require("../../services/error-service");

async function login(data) {
    const user = await getUserByEmailUNSAFE(data.email);

    if (!user) {
        throw invalidCredentials();
    }

    // if (!user.emailValidated) {
    //     throw emailNotValidated();
    // }

    const passMatch = await validatePassword(data.password, user.password);

    if (!passMatch) {
        throw invalidCredentials();
    }

    const token = generateJWT({
        id: user.id,
        email: user.email,
        name: user.name,
    });

    const userData = {
        id: user.id,
        userName: user.userName,
    };

    return {
        token,
        userData,
    };
}
module.exports = { login };
