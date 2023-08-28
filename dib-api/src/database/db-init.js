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
    console.log("Generating tables...");
    await createTables(pool);
    console.log("All done");
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
            userName VARCHAR(20) NOT NULL UNIQUE,
            realName VARCHAR(50),
            password VARCHAR(255) NOT NULL,
            email VARCHAR(120) NOT NULL UNIQUE,
            birthday TIMESTAMP NOT NULL,
            acceptedTOS BOOLEAN NOT NULL,
            avatarURL varchar(255),
            country VARCHAR(150),
            city VARCHAR(150),
            biography TEXT,
            validated BOOLEAN DEFAULT false,
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
            idPost CHAR(36) NOT NULL,
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
        CREATE TABLE IF NOT EXISTS validationcodes(
            id CHAR(36) PRIMARY KEY,
            idUser CHAR(36) NOT NULL,
            code CHAR(6),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users (id) ON DELETE CASCADE
        );
    `);

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            generateUUID(),
            "Depechejuan",
            "Juan León",
            "dressedinblackdm@gmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "Admin",
        ]
    );
    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            generateUUID(),
            "Escri",
            "Javier Escribano",
            "escribano101@gmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            generateUUID(),
            "Luis",
            "Luis Alcober",
            "luis_alcober@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            generateUUID(),
            "Javi",
            "Javier Redondo",
            "javirefe@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            generateUUID(),
            "Manu",
            "Manuel Cuesta",
            "manuelcuesta@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "Admin",
        ]
    );
}

dbInit();
