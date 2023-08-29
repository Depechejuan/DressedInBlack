"use strict";

const { getUserById, updateUser } = require("../../services/db-service");

const errorService = require("../../services/error-service");

async function controlPanel(idUser, userInfo) {
    console.log(idUser);
    console.log(userInfo);
    const oldUserInfo = await getUserById(idUser);
    console.log(oldUserInfo);
    if (!oldUserInfo[0]) {
        return errorService.unauthorized();
    }

    const userInfoEdit = Object.assign({}, oldUserInfo[0], userInfo);
    console.log(userInfoEdit);

    await updateUser(userInfoEdit);

    return userInfoEdit;
}

module.exports = controlPanel;
