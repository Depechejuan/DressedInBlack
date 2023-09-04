const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

// method = post, user, tour, id user, post or tour, idPhoto = generateUUID and photo file
async function saveFile(method, id, idPhoto, photo) {
    console.log("Llegamos a saveFile!");
    const directory = path.join(__dirname, `../../public/${method}/${id}`);
    console.log(directory);

    await fs.mkdir(directory, { recursive: true });
    const fileName = `${idPhoto}.webp`;
    console.log("Filename = ", fileName);
    const filePath = path.join(directory, fileName);
    console.log("El arcivo se guardará en: ", filePath);
    const resize = sharp(photo.buffer);

    const metadata = await resize.metadata();

    if (metadata.width > 1080) {
        console.log("cumple el IF");
        resize.resize(720);
    }
    console.log("IF Ok.");

    const save = await resize.webp().toFile(filePath);
    console.log(save);
    const fileURL = `/${method}/${fileName}`;
    console.log("Lo que envía saveFile: ", fileURL);
    return fileURL;
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
