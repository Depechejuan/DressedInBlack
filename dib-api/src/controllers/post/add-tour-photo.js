const { generateUUID } = require("../../services/crypto-services");
const {
    getTourByID,
    getFullUserById,
    savePhotoTour,
} = require("../../services/db-service");
const { notFound, unauthorized } = require("../../services/error-service");
const { saveFile } = require("../../services/file-service");

async function addPhotoToTour(method, idTour, idUser, photos) {
    const savedPhotos = [];

    try {
        const tour = await getTourByID(idTour);

        if (!tour) {
            notFound();
        }

        for (const photo of photos) {
            const idPhoto = generateUUID();
            const fileURL = await saveFile(method, tour.id, idPhoto, photo);
            const response = await savePhotoTour({
                id: idPhoto,
                idTour: tour.id,
                imageURL: fileURL,
            });
            savedPhotos.push({
                id: idPhoto,
                idTour: tour.id,
                imageURL: fileURL,
            });
        }

        return savedPhotos;
    } catch (err) {
        console.error(err);
    }
}

module.exports = addPhotoToTour;
