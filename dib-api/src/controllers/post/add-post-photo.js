const { generateUUID } = require("../../services/crypto-services");
const {
    getPostById,
    savePhotoPost,
    getFullUserById,
} = require("../../services/db-service");
const {
    genericError,
    notFound,
    unauthorized,
} = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

async function addPhotoToPost(idPost, idUser, photos) {
    const method = "post";
    const savedPhotos = [];

    try {
        const post = await getPostById(idPost);
        const originalUser = await getFullUserById(idUser);
        if (!post) {
            notFound();
        }

        if (post.idUser !== idUser && originalUser.role !== "Admin") {
            unauthorized();
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
        console.log("savedPhotos = ", savedPhotos);

        return savedPhotos;
    } catch (err) {
        genericError();
    }
}

module.exports = addPhotoToPost;
