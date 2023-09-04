"use strict";

let err = null;

function invalidCredentials() {
    err = new Error("You must enter a valid email and password");
    err.status = 400;
    err.code = "INVALID_CREDENTIALS";
    throw err;
}

function emailNotValidated() {
    err = new Error("Email has not been validated yet");
    err.status = 400;
    err.code = "EMAIL_NOT_VALIDATED";
    throw err;
}

function emailAlreadyRegistered() {
    err = new Error("This email has already been registered");
    err.status = 400;
    err.code = "EMAIL_ALREADY_REGISTERED";
    throw err;
}

function didNotAcceptedTOS() {
    err = new Error("User must accept terms and services to register");
    err.status = 403;
    err.code = "DID_NOT_ACCEPT_TOS";
    throw err;
}

function notAuth() {
    err = new Error("User not authenticated. Token missing");
    err.status = 401;
    err.code = "NOT_AUTHENTICATED";
    throw err;
}

function unauthorized() {
    err = new Error("User not authorized to do this action");
    err.status = 403;
    err.code = "UNAUTHORIZED";
    throw err;
}

function notFound() {
    err = new Error("Not Found");
    err.status = 404;
    err.code = "NOT_FOUND";
    throw err;
}

function incomplete() {
    err = new Error("You must complete all required data");
    err.status = 403;
    err.code = "INCOMPLETE";
}

function genericError() {
    err = new Error("An error just ocurred");
    err.status = 403;
    err.code = "GENERIC_ERROR";
}

module.exports = {
    invalidCredentials,
    emailNotValidated,
    emailAlreadyRegistered,
    didNotAcceptedTOS,
    notAuth,
    unauthorized,
    notFound,
    incomplete,
    genericError,
};
