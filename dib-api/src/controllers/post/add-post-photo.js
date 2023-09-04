const { generateUUID } = require("../../services/crypto-services");
const { getPostById, savePhotoPost } = require("../../services/db-service");
const {
    genericError,
    notFound,
    unauthorized,
} = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

async function addPhotoToPost(idPost, idUser, photos) {
    const method = "post";
    const savedPhotos = [];
    console.log("entramos a AddPhoto");
    try {
        const post = await getPostById(idPost);
        console.log("El post que queremos editar: ", post);
        if (!post) {
            notFound();
        }

        if (post.idUser !== idUser) {
            unauthorized();
        }

        for (const photo of photos) {
            console.log("¡¡¡¡¡Bucle!!!!!!");
            const idPhoto = generateUUID();
            console.log(idPhoto);
            const fileURL = await saveFile(method, post.id, idPhoto, photo);
            console.log(
                "Todo junto. idPhoto: ",
                idPhoto,
                "id del Post: ",
                post.id,
                "fileURL: ",
                fileURL
            );
            const response = await savePhotoPost({
                id: idPhoto,
                idPost: post.id,
                imageURL: fileURL,
            });
            console.log("La respuesta de la base de datos: ", response);
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
