const { generateUUID } = require("../../services/crypto-services");
const {
    getPostById,
    savePhotoPost,
    getFullUserById,
} = require("../../services/db-service");
const {
    notFound,
    unauthorized,
    uploadError,
} = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

async function addPhotoToPost(method, idPost, idUser, photos) {
    const savedPhotos = [];

    try {
        const post = await getPostById(idPost);
        const originalUser = await getFullUserById(idUser);
        if (!post) {
            throw notFound();
        }

        if (post.idUser !== idUser && originalUser.role !== "Admin") {
            throw unauthorized();
        }

        for (const photo of photos) {
            const idPhoto = generateUUID();
            const fileURL = await saveFile(method, post.id, idPhoto, photo);
            const response = await savePhotoPost({
                id: idPhoto,
                idPost: post.id,
                imageURL: fileURL,
            });
            savedPhotos.push({
                id: idPhoto,
                idPost: post.id,
                imageURL: fileURL,
            });
        }

        return savedPhotos;
    } catch (err) {
        throw uploadError();
    }
}

module.exports = addPhotoToPost;
