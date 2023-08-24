"use strict";

require("dotenv").config();
const { hashPassword, generateUUID } = require("../services/crypto-services");
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

    // create tables and so.

    console.log("Database Creation complete.");
    await pool.end();
};

async function createTables(pool) {
    const plainPassowrd = process.env.ADMINPASS;

    const hashedPassword = await hashPassword(plainPassowrd);
    const adminId = generateUUID();

    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id CHAR(36) PRIMARY KEY,
            userName VARCHAR(20) NOT NULL UNIQUE;
            realName VARCHAR(50);
            password VARCHAR(50) NOT NULL;
            birthday TIMESTAMP NOT NULL,
            acceptedTOS BOOL NOT NULL,
            avatarURL varchar(255),
            country VARCHAR(150),
            city VARCHAR(150),
            role ENUM('Admin', 'Moderador', 'Devotee', 'VIP') DEFAULT 'Devotee',
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS posts(
            id CHAR(36) PRIMARY KEY,
            title VARCHAR(70) NOT NULL,
            description TEXT NOT NULL,
            idUser CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS postimages(
            id CHAR(36) PRIMARY KEY,
            idPost CHAR(369) NOT NULL,
            imageURL VARCHAR(255),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idPost) REFERENCES posts (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS postcomments(
            id CHAR(36) PRIMARY KEY,
            comments TEXT NOT NULL,
            idUser CHAR(36) NOT NULL,
            idPost CHAR(36) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (idPost) REFERENCES posts (id) ON DELETE CASCADE
        );
    `);

    await pool.query(`
        INSERT INTO users (
            id, userName, realName, password, birthday, acceptdTOS, validated, role
        )
        VALUES (
            '${adminId}', 'Depechejuan', 'Juan León', 'dressedinblackdm@gmail.com', ${hashedPassword}, 1990-01-01, true, true, 'Admin'
        );
    `);
}

dbInit();
