const { generateUUID } = require("../../services/crypto-services");
const { getTourByID, savePhotoTour } = require("../../services/db-service");
const { notFound } = require("../../services/error-service");
const { uploadFile } = require("../../services/file-service");
const { authorize } = require("../../validators/google-auth");

async function addPhotoToTour(method, idTour, idUser, photos) {
    const savedPhotos = [];

    try {
        const tour = await getTourByID(idTour);
        const jwtClient = await authorize();
        if (!tour) {
            notFound();
        }

        for (const photo of photos) {
            const idPhoto = generateUUID();
            const fileURL = `/${method}/${idTour}/${idPhoto}`;
            const upload = await uploadFile(jwtClient, fileURL, photo);
            const fileName = upload.data.id;
            await savePhotoTour({
                id: idPhoto,
                idTour: tour.id,
                imageURL: fileName,
            });
            savedPhotos.push({
                id: idPhoto,
                idTour: tour.id,
                imageURL: fileName,
            });
        }

        return savedPhotos;
    } catch (err) {
        console.error(err);
    }
}

module.exports = addPhotoToTour;
