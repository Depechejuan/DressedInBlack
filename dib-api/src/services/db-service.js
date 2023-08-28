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

    // LOGIN/REGISTER
    async saveUser(user) {
        const statement = `
        INSERT INTO users(
            id, userName, realName, password, birthday, acceptdTOS, validated, role
        )`;
    },

    async saveValidationCode(code) {
        const statement = `
        INSERT INTO validationcodes(id, idUser, code)
        VALUES (?, ?, ?)`;
        await db.execute(statement, [code.id, code.idUser, code.code]);
    },
};
