require("dotenv").config();
const { hashPassword, generateUUID } = require("../services/crypto-services");

async function addData(pool) {
    const plainPassowrd = process.env.ADMINPASS;
    const hashedPassword = await hashPassword(plainPassowrd);
    const DepechejuanID = generateUUID();
    const DepechejuanName = process.env.USER1NAME;
    const DepechejuanEmail = process.env.USER1EMAIL;
    const DepechejuanDate = process.env.USER1DATE;
    const EscriID = generateUUID();
    const EscriName = process.env.USER2NAME;
    const EscriEmail = process.env.USER2EMAIL;
    const EscriDate = process.env.USER2DATE;
    const LuisID = generateUUID();
    const LuisName = process.env.USER3NAME;
    const LuisEmail = process.env.USER3EMAIL;
    const LuisDate = process.env.USER3DATE;
    const JaviID = generateUUID();
    const JaviName = process.env.USER4NAME;
    const JaviEmail = process.env.USER4EMAIL;
    const JaviDate = process.env.USER4DATE;
    const ManuID = generateUUID();
    const ManuName = process.env.USER5NAME;
    const ManuEmail = process.env.USER5EMAIL;
    const ManuDate = process.env.USER5DATE;

    console.log("Creating users");
    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, city, biography, favAlbum, favSong, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            DepechejuanID,
            "Depechejuan",
            DepechejuanName,
            DepechejuanEmail,
            hashedPassword,
            DepechejuanDate,
            true,
            true,
            "2",
            "/users/juan.jpg",
            "Alicante",
            "Teclista y productor de la banda tributo a Depeche Mode - Dressed In Black, y fan de Depeche Mode desde que tiene uso de Razón. \n Su amor por la banda le dió pie a profundizar sobre el uso de la tecnología musical y aprenderse sus temas, recrear sus sonidos, aprender a samplear y mucho más.",
            "Songs Of Faith And Devotion",
            "Walking In My Shoes",
            "Admin",
        ]
    );
    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, city, biography, favAlbum, favSong, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            EscriID,
            "Escri",
            EscriName,
            EscriEmail,
            hashedPassword,
            EscriDate,
            true,
            true,
            "1",
            "/users/escri.jpg",
            "Elda",
            "Cantante baritono, con un amplio espectro en el gusto musical, y una vitalidad inigualable sobre los escenarios. \n Coleccionaba todas las rarezas y conciertos de la banda desde bien jóven, lo que le ha nutrido de los mejores matices de Dave Gahan de cada Tour.",
            "Violator",
            "Enjoy The Silence",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, city, biography, favAlbum, favSong, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            LuisID,
            "Luis",
            LuisName,
            LuisEmail,
            hashedPassword,
            LuisDate,
            true,
            true,
            "4",
            "/users/luis.jpg",
            "Valencia",
            "La magia en la guitarra. Guitarrista profesional, en directo y en estudio. A sus espaldas tiene grabaciones como []. \n No sólo es fan de Depeche, sino de muchísimos grupos y géneros más, lo que le proporciona una visión muy amplia de la música, añadiendo lo necesario para que las canciones lleguen al siguiente nivel.",
            "Songs Of Faith And Devotion",
            "Barrel of A Gun",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, city, biography, favAlbum, favSong, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            JaviID,
            "Javi",
            JaviName,
            JaviEmail,
            hashedPassword,
            JaviDate,
            true,
            true,
            "3",
            "/users/javi.jpg",
            "Valencia",
            "Poca gente lo sabe, pero él fue el creador de los principales foros hispanohablantes de la banda. Desde bien joven aprendió a tocar la batería en varios estilos. \n Su trabajo en la batería se asemeja más al estilo de Alan Wilder que al de Christian Eigner",
            "Ultra",
            "In Your Room",
            "Admin",
        ]
    );

    await pool.query(
        "INSERT INTO users (id, userName, realName, email, password, birthday, acceptedTOS, validated, toShow, avatarURL, city, biography, favAlbum, favSong, role) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            ManuID,
            "Manu",
            ManuName,
            ManuEmail,
            hashedPassword,
            ManuDate,
            true,
            true,
            "5",
            "/users/manu.jpg",
            "Elche",
            "El destino ha puesto a este guitarrista profesional del mundo del Death Metal (HELLSOUND) en nuestro camino, pero esta vez, para ser nuestro nuevo bajista. \n Nuevo fan de la banda, que provée de profundidad de sonido en los temas más rock de la banda, y en algunos otros.",
            "Songs Of Faith And Devotion",
            "Rush",
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

    await pool.query(
        `
        INSERT INTO user_instruments (idUser, idInstrument)
        VALUES(?,?)
        `,
        [LuisID, "Teclados"]
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
