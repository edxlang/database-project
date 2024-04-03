const oracledb = require('oracledb');

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.SID}`
        });

        console.log('Successfully connected to Oracle!');
        return connection;
    } catch (err) {
        console.error(err);
    }
}

module.exports = run;