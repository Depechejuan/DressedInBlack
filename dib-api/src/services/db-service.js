const { getConnection } = require("../database/mysql-connection");

const db = getConnection();

module.exports = {
    async getUserByEmail(email) {
        const statement = `
        SELECT email FROM users WHERE users.email = ?
    `;
        const [rows] = await db.execute(statement, [email]);
        return rows[0];
    },
};
