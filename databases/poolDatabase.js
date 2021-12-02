const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "isabelle13",
    database: "word_beauty",
    host: "localhost",
    port: 3000
});

module.exports = pool;