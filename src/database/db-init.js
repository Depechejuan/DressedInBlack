"use strict";

require("dotenv").config();
const addData = require("./db-add-data");
const addNewsletter = require("./db-add-newsletter");
const addTourData = require("./db-add-tour-details");
const { createPool } = require("./mysql-connection");

// bring hashes
const DATABASE_NAME = process.env.MYSQL_DATABASE;

const dbInit = async () => {
    const pool = createPool();
    console.log("Deleting previous data...");
    await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME}`);
    console.log("Database successfuly deleted");
    console.log("Creating new DataBase");
    await pool.query(`CREATE DATABASE ${DATABASE_NAME}`);
    console.log("Database successfully created");
    await pool.query(`USE ${DATABASE_NAME}`);
    console.log("Generating tables...");
    await createTables(pool);
    console.log("Adding Details to DataBase");
    await addData(pool);
    console.log("Adding TourDates");
    await addTourData(pool);
    console.log("Adding first newsletters");
    await addNewsletter(pool);
    console.log("All done");
    console.log("Database Creation complete.");
    await pool.end();
};

async function createTables(pool) {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id CHAR(36) PRIMARY KEY,
            userName VARCHAR(20) NOT NULL UNIQUE,
            realName VARCHAR(50),
            password VARCHAR(255) NOT NULL,
            email VARCHAR(120) NOT NULL UNIQUE,
            birthday TIMESTAMP NOT NULL,
            country VARCHAR(150),
            city VARCHAR(150),
            biography TEXT,
            favAlbum VARCHAR(255),
            favSONG VARCHAR(255),
            avatarURL VARCHAR(255),
            toShow TINYINT,
            acceptedTOS BOOLEAN NOT NULL,
            validated BOOLEAN DEFAULT false,
            role ENUM('Admin', 'Moderador', 'Devotee', 'VIP') DEFAULT 'Devotee',
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS instruments (
            id VARCHAR(100) PRIMARY KEY,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS user_instruments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            idUser CHAR(36),
            idInstrument VARCHAR(100),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (idInstrument) REFERENCES instruments (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS users_photos (
            id CHAR(36) PRIMARY KEY,
            idUser CHAR(36),
            imageURL VARCHAR(255) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE
    );`);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS tour (
            id CHAR(36) PRIMARY KEY,
            tourName VARCHAR(255) NOT NULL,
            tourDate DATE NOT NULL,
            city VARCHAR(150) NOT NULL,
            country VARCHAR(150) NOT NULL,
            venue VARCHAR(255) NOT NULL,
            soldOut BOOLEAN DEFAULT false,
            setlist TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS tour_photos (
            id CHAR(36) PRIMARY KEY,
            imageURL VARCHAR(255) NOT NULL,
            idTour CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idTour) REFERENCES tour (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS tour_videos(
            id CHAR(36) PRIMARY KEY,
            videoURL VARCHAR(255),
            idTour CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idTour) REFERENCES tour (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS posts(
            id CHAR(36) PRIMARY KEY,
            title VARCHAR(70) NOT NULL,
            description TEXT NOT NULL,
            idUser CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS post_photos(
            id CHAR(36) PRIMARY KEY,
            idPost CHAR(36) NOT NULL,
            imageURL VARCHAR(255),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idPost) REFERENCES posts (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS post_comments(
            id CHAR(36) PRIMARY KEY,
            comments TEXT NOT NULL,
            idUser CHAR(36) NOT NULL,
            idPost CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (idPost) REFERENCES posts (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS post_videos(
            id CHAR(36) PRIMARY KEY,
            videoURL VARCHAR(255),
            idPost CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP,
            FOREIGN KEY (idPost) REFERENCES posts (id) ON DELETE CASCADE
        );    
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS validation_codes(
            id CHAR(36) PRIMARY KEY,
            idUser CHAR(36) NOT NULL,
            code CHAR(6),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS newsletter(
        id CHAR(36) PRIMARY KEY,
        email CHAR(36) NOT NULL,
        city VARCHAR(255)
    );
`);
}

dbInit();
