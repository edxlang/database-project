const oracledb = require('oracledb');
require('dotenv').config();

async function runApp() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.SID}`
        });
        return connection;
    } catch (err) {
        console.error(err);
    }
}
module.exports = { runApp };