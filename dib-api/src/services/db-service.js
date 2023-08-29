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
            GROUP_CONCAT(i.id) AS instruments
        FROM users u
        JOIN user_instruments ui ON u.id = ui.idUser
        JOIN instruments i ON ui.idInstrument = i.id
        WHERE u.id = ?
        GROUP BY u.id, u.userName, u.realName, u.birthday, u.avatarURL, u.city, u.biography`;
        const [rows] = await db.execute(statement, [idUser]);
        const user = rows[0];
        user.instruments = user.instruments.split(",");
        return user;
    },

    // LOGIN/REGISTER
    async saveUser(user) {
        const statement = `
        INSERT INTO users(
            id, userName, realName, password, birthday, acceptdTOS, validated, role
        )`;
    },

    async updateUser(edit) {
        const statement = `
        UPDATE users
        SET avatarURL = ?, country = ?, city = ?, biography = ?
        WHERE id = ?`;
        const [rows] = await db.execute(statement, [
            edit.avatarURL ?? null,
            edit.country ?? null,
            edit.city ?? null,
            edit.biography ?? null,
            edit.id,
        ]);
        return rows;
    },

    // async saveValidationCode(code) {
    //     const statement = `
    //     INSERT INTO validationcodes(id, idUser, code)
    //     VALUES (?, ?, ?)`;
    //     await db.execute(statement, [code.id, code.idUser, code.code]);
    // },
};
