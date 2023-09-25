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

async function deleteFile(endpoint, type, idType, idPhoto) {
    try {
        const directory = path.join(
            __dirname,
            `../../public/${type}/${idType}`
        );

        if (endpoint == "full") {
            const directoryExists = await fs
                .access(directory)
                .then(() => true)
                .catch(() => false);
            if (directoryExists) {
                await fs.rm(directory, { recursive: true });
            }
        }

        if (endpoint == "unique") {
            const filePath = path.join(
                __dirname,
                `../../public/${type}/${idType}/${idPhoto}.webp`
            );
            const directoryExists = await fs
                .access(filePath)
                .then(() => true)
                .catch(() => false);
            if (directoryExists) {
                await fs.rm(filePath, { recursive: true });
            }
        }
    } catch (err) {
        console.error("Error deleting file", err);
    }
}

module.exports = {
    saveFile,
    deleteFile,
};

// for (const photo of idPhotos) {
//     const filePath = path.join(
//         __dirname,
//         `../../public/${type}/${id}/${photo}.webp`
//     );
//     const directory = path.join(
//         __dirname,
//         `../../public/${type}/${id}`
//     );
//     console.log(directory);
//     const folderPath = path.join(directory);

//     // Verificar si el directorio existe antes de intentar eliminarlo
//     const directoryExists = await fs
//         .access(folderPath)
//         .then(() => true)
//         .catch(() => false);

//     if (directoryExists) {
//         console.log("Deleting photo ", photo);
//         await fs.rm(folderPath, { recursive: true });
//         await fs.rmdir(folderPath);
//         console.log(`Deleted directory: ${folderPath}`);
// } else {
//     console.log(`Directory does not exist: ${folderPath}`);
// }
