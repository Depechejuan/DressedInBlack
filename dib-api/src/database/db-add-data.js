require("dotenv").config();
const { hashPassword, generateUUID } = require("../services/crypto-services");

async function addData(pool) {
    const plainPassowrd = process.env.ADMINPASS;
    const hashedPassword = await hashPassword(plainPassowrd);
    const DepechejuanID = generateUUID();
    const JaviID = generateUUID();
    const EscriID = generateUUID();
    const LuisID = generateUUID();
    const ManuID = generateUUID();

    console.log("Creating users");
    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            DepechejuanID,
            "Depechejuan",
            "Juan León",
            "dressedinblackdm@gmail.com",
            hashedPassword,
            "1986-07-02",
            true,
            true,
            "2",
            "/users/juan.jpg",
            "Admin",
        ]
    );
    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            EscriID,
            "Escri",
            "Javier Escribano",
            "escribano101@gmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "1",
            "/users/escri.jpg",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            LuisID,
            "Luis",
            "Luis Alcober",
            "luis_alcober@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "3",
            "/users/luis.jpg",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            JaviID,
            "Javi",
            "Javier Redondo",
            "javirefe@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "4",
            "/users/javi.jpg",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            ManuID,
            "Manu",
            "Manuel Cuesta",
            "manuelcuesta@hotmail.com",
            hashedPassword,
            "1990-01-01",
            true,
            true,
            "5",
            "/users/manu.jpg",
            "Admin",
        ]
    );

    console.log("adding instruments");
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Voz')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Coros')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Guitarra')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Bajo')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Batería')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Teclados')`);
    await pool.query(`
    INSERT INTO instruments (id) VALUES ('Programación')`);

    console.log("Adding Instruments to Users");
    console.log("for Juan");
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)`,
        [DepechejuanID, "Coros"]
    );
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)`,
        [DepechejuanID, "Teclados"]
    );
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)`,
        [DepechejuanID, "Programación"]
    );

    console.log("for Escri");
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)`,
        [EscriID, "Voz"]
    );
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)
        `,
        [EscriID, "Teclados"]
    );
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)
        `,
        [EscriID, "Programación"]
    );

    console.log("For Luis");
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)
        `,
        [LuisID, "Guitarra"]
    );

    console.log("For Javi");
    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)
        `,
        [JaviID, "Batería"]
    );
    await pool.query(
        `
    INSERT INTO user_instruments (idUser, idInstrument)
    VALUES(?,?)
    `,
        [JaviID, "Programación"]
    );

    console.log("For Manu");
    await pool.query(
        `
    INSERT INTO user_instruments (idUser, idInstrument)
    VALUES(?,?)
    `,
        [ManuID, "Bajo"]
    );
}

module.exports = addData;
