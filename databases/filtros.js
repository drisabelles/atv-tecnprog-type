const express = require("express");
const app = express();
const pool = require("./poolDatabase");


app.use(express.json());

app.get("/pessoa", async (req, res) => {
    try {
        const allPessoa = await pool.query("SELECT genero FROM pessoa");

        res.json(allPessoa.rows);
    } catch (err) {
        console.error(err.message); 
    }

});
