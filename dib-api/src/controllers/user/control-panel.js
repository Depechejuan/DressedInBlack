"use strict";

const { getUserById, updateUser } = require("../../services/db-service");

const errorService = require("../../services/error-service");

async function controlPanel(idUser, userInfo) {
    const oldUserInfo = await getUserById(idUser);
    if (!oldUserInfo[0]) {
        return errorService.unauthorized();
    }

    const userInfoEdit = Object.assign({}, oldUserInfo[0], userInfo);

    await updateUser(userInfoEdit);

    return userInfoEdit;
}

module.exports = controlPanel;
