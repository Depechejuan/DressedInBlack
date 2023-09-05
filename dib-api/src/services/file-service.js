const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");
const { genericError } = require("./error-service");

// method = post, user, tour, id user, post or tour, idPhoto = generateUUID and photo file
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

async function deleteFile(idPhoto) {
    const directory = path.join(
        __dirname,
        `../../public/${method}/${id}`,
        idPhoto
    );
    const folderPath = path.join(directory);

    try {
        await fs.rmdir(folderPath, { recurseive: true });
    } catch (err) {
        console.error("Error deleting file", err);
    }
}

module.exports = {
    saveFile,
    deleteFile,
};
