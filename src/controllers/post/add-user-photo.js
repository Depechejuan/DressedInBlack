const { generateUUID } = require("../../services/crypto-services");
const {
    getUserById,
    getFullUserById,
    savePhotoUser,
} = require("../../services/db-service");
const {
    genericError,
    notFound,
    unauthorized,
} = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

// method = [ user, post, tour]

async function addPhotoToUser(method, idUser, idUserEdit, photos) {
    const savedPhotos = [];
    try {
        const user = await getUserById(idUserEdit);
        const originalUser = await getFullUserById(idUser);

        if (!user) {
            notFound();
        }

        if (user.idUser !== idUser && originalUser.role !== "Admin") {
            unauthorized();
        }
        for (const photo of photos) {
            const idPhoto = generateUUID();
            const fileURL = await saveFile(method, idUserEdit, photo);
            const response = await savePhotoUser({
                id: idPhoto,
                idUser: idUserEdit,
                imageURL: fileURL,
            });
            savedPhotos.push({
                id: idPhoto,
                idUser: idUserEdit,
                imageURL: fileURL,
            });
        }
        console.log("savedPhotos = ", savedPhotos);

        return savedPhotos;
    } catch (err) {
        throw genericError();
    }
}

module.exports = addPhotoToUser;
