const express = require ('express');
const mysql = require('mysql');

const app = express();
const PORT = 8001;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app,get("/student", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        returnres.json(data);
    })
})

app.listen(PORT, () =>{
    console.log("Listening :${PORT}");
})

