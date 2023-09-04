const { generateUUID } = require("../../services/crypto-services");
const {
    getUserById,
    savePhotoPost,
    savePhotoTour,
    savePhotoUser,
} = require("../../services/db-service");
const { genericError } = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

// method = [ user, post, tour]

async function addPhoto(method, idMethod, photo) {
    try {
        const idPhoto = generateUUID();
        const fileURL = await saveFile(method, idMethod, photo);

        const methodToFunction = {
            user: await savePhotoUser(photo),
            post: await savePhotoPost(photo),
            tour: await savePhotoTour(photo),
        };

        const savePhoto = methodToFunction[method];

        await savePhoto();
    } catch (err) {
        throw genericError();
    }
}
