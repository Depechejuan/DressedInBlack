"use strict";

const { getUserById, updateUser } = require("../../services/db-service");

const errorService = require("../../services/error-service");

async function controlPanel(idUser, userInfo) {
    const oldUserInfo = await getUserById(idUser);
    if (!oldUserInfo) {
        return errorService.unauthorized();
    }
    const userInfoEdit = Object.assign({}, oldUserInfo[0], userInfo);
    const update = await updateUser(idUser, userInfoEdit);

    return userInfoEdit;
}

module.exports = controlPanel;
