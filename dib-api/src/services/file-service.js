const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");
const { genericError } = require("./error-service");

// method = post, user, tour // id user, post or tour // idPhoto = generateUUID and photo file
async function saveFile(method, id, idPhoto, photo) {
    const directory = path.join(__dirname, `../../public/${method}/${id}`);

    try {
        await fs.mkdir(directory, { recursive: true });
        const fileName = `${idPhoto}.webp`;
        const filePath = path.join(directory, fileName);
        const resize = sharp(photo.buffer);

        const metadata = await resize.metadata();

        if (metadata.width > 1080) {
            resize.resize(720);
        }

        await resize.webp().toFile(filePath);
        const fileURL = `/${method}/${id}/${fileName}`;
        return fileURL;
    } catch (err) {
        console.error(err);
        genericError();
    }
}

async function deleteFile(type, id, idPhotos) {
    try {
        console.log("deleting photos from directory");
        for (const photo of idPhotos) {
            const directory = path.join(
                __dirname,
                `../../public/${type}/${id}/${photo}.webp`
            );
            const folderPath = path.join(directory);

            // Verificar si el directorio existe antes de intentar eliminarlo
            const directoryExists = await fs
                .access(folderPath)
                .then(() => true)
                .catch(() => false);

            if (directoryExists) {
                console.log("Deleting photo ", photo);
                await fs.rmdir(folderPath, { recursive: true });
                console.log(`Deleted directory: ${folderPath}`);
            } else {
                console.log(`Directory does not exist: ${folderPath}`);
            }
        }
        console.log("Done?");
    } catch (err) {
        console.error("Error deleting file", err);
    }
}

module.exports = {
    saveFile,
    deleteFile,
};
