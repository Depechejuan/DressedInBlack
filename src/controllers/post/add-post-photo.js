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
const { saveFile, uploadFile } = require("../../services/file-service");
const { authorize } = require("../../validators/google-auth");

async function addPhotoToPost(method, idPost, idUser, photos) {
    const savedPhotos = [];
    console.log(photos);
    try {
        const post = await getPostById(idPost);
        const originalUser = await getFullUserById(idUser);
        const jwtClient = await authorize();
        if (!post) {
            notFound();
        }

        if (post.idUser !== idUser && originalUser.role !== "Admin") {
            unauthorized();
        }

        for (const photo of photos) {
            const idPhoto = generateUUID();
            const fileURL = `/${method}/${idPost}/${idPhoto}`;
            const upload = await uploadFile(jwtClient, fileURL, photo);
            const fileName = upload.data.id;
            await savePhotoPost({
                id: idPhoto,
                idPost: post.id,
                imageURL: fileName,
            });
            savedPhotos.push({
                id: idPhoto,
                idPost: post.id,
                imageURL: fileName,
            });
        }

        return savedPhotos;
    } catch (err) {
        genericError();
    }
}

module.exports = addPhotoToPost;
