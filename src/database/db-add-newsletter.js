const { generateUUID } = require("../services/crypto-services");
const DepechejuanEmail = process.env.USER1EMAIL;
const EscriEmail = process.env.USER2EMAIL;
const LuisEmail = process.env.USER3EMAIL;
const JaviEmail = process.env.USER4EMAIL;
const ManuEmail = process.env.USER5EMAIL;
const DepechejuanCity = process.env.USER1CITY;
const EscriCity = process.env.USER2CITY;
const LuisCity = process.env.USER3CITY;
const JaviCity = process.env.USER4CITY;
const ManuCity = process.env.USER5CITY;

async function addNewsletter(pool) {
    await pool.query(
        `INSERT INTO newsletter(id, email, city)
        VALUES (?, ?, ?)`,
        [generateUUID(), DepechejuanEmail, DepechejuanCity]
    );

    await pool.query(
        `INSERT INTO newsletter(id, email, city)
        VALUES (?, ?, ?)`,
        [generateUUID(), EscriEmail, EscriCity]
    );

    await pool.query(
        `INSERT INTO newsletter(id, email, city)
        VALUES (?, ?, ?)`,
        [generateUUID(), LuisEmail, LuisCity]
    );

    await pool.query(
        `INSERT INTO newsletter(id, email, city)
        VALUES (?, ?, ?)`,
        [generateUUID(), JaviEmail, JaviCity]
    );

    await pool.query(
        `INSERT INTO newsletter(id, email, city)
        VALUES (?, ?, ?)`,
        [generateUUID(), ManuEmail, ManuCity]
    );
}

module.exports = addNewsletter;
