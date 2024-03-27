const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");
const { genericError } = require("./error-service");
require("dotenv").config();
const { Readable } = require("stream");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// method = post, user, tour // id user, post or tour // idPhoto = generateUUID and photo file
async function saveFile(method, id, idPhoto, photo) {
    try {
        photo.originalname = `${method}/${id}/${idPhoto}.webp`;

        const bufferStream = new Readable();
        bufferStream.push(photo.buffer);
        bufferStream.push(null);

        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: `${method}/${id}`,
                    public_id: idPhoto,
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            bufferStream.pipe(uploadStream);
        });

        console.log(result);
        console.log(result.secure_url);
        console.log(result.url);

        return photo.originalname;
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
