"use strict";

const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    async hashPassword(plainPassword) {
        return await bcrypt.hash(plainPassword, 12);
    },

    async validatePassword(plainPassword, hash) {
        return await bcrypt.compare(plainPassword, hash);
    },

    generateRandomValidationCode() {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        return code;
    },

    generateUUID() {
        return crypto.randomUUID();
    },

    generateJWT(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "10d",
        });
    },

    parseJWT(token) {
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            return { ...payload, token };
        } catch (err) {
            console.error(err);
            return null;
        }
    },
};
