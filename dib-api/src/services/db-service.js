const { getConnection } = require("../database/mysql-connection");

const db = getConnection();

module.exports = {
    // GET
    async getUserByEmail(email) {
        const statement = `
        SELECT email FROM users WHERE users.email = ?
    `;
        const [rows] = await db.execute(statement, [email]);
        return rows[0];
    },

    async getUserByEmailUNSAFE(email) {
        const statement = `
        SELECT * FROM users WHERE users.email = ?
    `;
        const [rows] = await db.execute(statement, [email]);
        return rows[0];
    },

    async getUserById(idUser) {
        const statement = `
        SELECT id, userName, avatarURL
        FROM users
        WHERE id = ?`;
        const [rows] = await db.execute(statement, [idUser]);
        return rows[0];
    },

    async getFullUserById(idUser) {
        const statement = `
        SELECT 
            u.userName, 
            u.realName, 
            u.birthday, 
            u.avatarURL, 
            u.city, 
            u.biography,
            u.role,
            GROUP_CONCAT(i.id) AS instruments
        FROM
            users u
        JOIN
            user_instruments ui ON u.id = ui.idUser
        JOIN
            instruments i ON ui.idInstrument = i.id
        WHERE
            u.id = ?
        GROUP BY
            u.id, u.userName, u.realName, u.birthday, u.avatarURL, u.city, u.biography`;
        const [rows] = await db.execute(statement, [idUser]);
        const user = rows[0];
        user.instruments = user.instruments.split(",");
        return user;
    },

    async getAllUsersFull() {
        const statement = `
        SELECT 
            u.id,
            u.userName, 
            u.realName, 
            u.birthday, 
            u.avatarURL, 
            u.city, 
            u.biography,
            u.role,
            u.favAlbum,
            u.favSong,
            u.toShow,
            GROUP_CONCAT(i.id) AS instruments,
            up.imageURL AS ImageURL
        FROM
            users u
        JOIN
            user_instruments ui ON u.id = ui.idUser
        JOIN
            instruments i ON ui.idInstrument = i.id
        LEFT JOIN  -- Utilizamos LEFT JOIN para que no se omitan registros de "users" que no tengan una imagen en "users_photos"
            users_photos up ON u.id = up.idUser
        GROUP BY
            u.id, u.userName, u.realName, u.birthday, u.avatarURL, u.city, u.biography, up.imageURL
        ORDER BY
            u.toShow ASC;
        `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    // LOGIN/REGISTER
    async saveUser(user) {
        const statement = `
        INSERT INTO users(
            id, userName, realName, password, birthday, acceptdTOS, validated, role
        )`;
    },

    async updateUser(idUser, edit) {
        const statement = `
        UPDATE users
        SET avatarURL = ?, country = ?, city = ?, biography = ?
        WHERE id = ?`;
        const [rows] = await db.execute(statement, [
            edit.avatarURL ?? null,
            edit.country ?? null,
            edit.city ?? null,
            edit.biography ?? null,
            idUser,
        ]);
        return rows;
    },

    // POST

    async createPost(post) {
        const statement = `
        INSERT INTO posts(id, title, description, idUser)
        VALUES (?, ?, ?, ?)`;
        const rows = await db.execute(statement, [
            post.id,
            post.title,
            post.description,
            post.idUser,
        ]);
    },

    async getAllPosts() {
        const statement = `
        SELECT
            p.*,
            JSON_ARRAYAGG(pp.imageURL) AS imageURL
        FROM
            posts p
        LEFT JOIN
            post_photos pp ON p.id = pp.idPost
        GROUP BY
            p.id;
        `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    async getPostById(id) {
        const statement = `
        SELECT
            p.*,
            JSON_ARRAYAGG(pp.imageURL) AS imageURL
        FROM
            posts p
        LEFT JOIN
            post_photos pp ON p.id = pp.idPost
        WHERE
            p.id = ?
        GROUP BY
            p.id;
        `;
        const [rows] = await db.execute(statement, [id]);
        return rows[0];
    },

    async updatePost(post) {
        try {
            const statement = `
            UPDATE posts
            SET title = ?, description = ?
            WHERE id = ?`;

            await db.execute(statement, [
                post.title,
                post.description,
                post.id,
            ]);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    async getTour() {
        const statement = `
        SELECT
            t.*,
            JSON_ARRAYAGG(tp.imageURL) AS imageURL
        FROM
            tour t
        LEFT JOIN
            tour_photos tp ON t.id = tp.idTour
        GROUP BY
            t.id
        ORDER BY
            t.tourDate DESC;
        `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    async addTour(tour) {
        const statement = `
        INSERT INTO tour(id, tourName, tourDate, city, country, venue, soldOut, setlist)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await db.execute(statement, [
            tour.id,
            tour.tourName,
            tour.tourDate,
            tour.city,
            tour.country,
            tour.venue,
            tour.soldOut,
            tour.setlist,
        ]);
    },

    async editTourDate(tour) {
        const statement = `UPDATE tour
        SET tourName = ?, tourDate = ?, city = ?, country = ?, venue = ?, soldOut = ?, setlist = ?
        WHERE id = ?`;
        await db.execute(statement, [
            tour.tourName,
            tour.tourDate,
            tour.city,
            tour.country,
            tour.venue,
            tour.soldOut,
            tour.setlist,
            tour.id,
        ]);
    },

    async getTourById(id) {
        const statement = `
        SELECT * FROM tour WHERE id = ?`;
        const [rows] = await db.execute(statement, [id]);
        return rows[0];
    },

    async savePhotoUser(photo) {
        const statement = `
        INSERT INTO users_photos(id, idUser, imageURL)
        VALUES(?, ?, ?)`;
        await db.execute(statement, [photo.id, photo.idUser, photo.imageURL]);
    },

    async savePhotoPost(photo) {
        const statement = `
        INSERT INTO post_photos(id, idPost, imageURL)
        VALUES(?, ?, ?)`;
        await db.execute(statement, [photo.id, photo.idPost, photo.imageURL]);
    },

    async savePhotoTour(photo) {
        console.log("la foto en savePhototoTour de dbservices");
        console.log(photo);
        const statement = `
        INSERT INTO tour_photos(id, idTour, imageURL)
        VALUES(?, ?, ?)`;
        await db.execute(statement, [photo.id, photo.idTour, photo.imageURL]);
    },

    // async saveValidationCode(code) {
    //     const statement = `
    //     INSERT INTO validationcodes(id, idUser, code)
    //     VALUES (?, ?, ?)`;
    //     await db.execute(statement, [code.id, code.idUser, code.code]);
    // },
};
