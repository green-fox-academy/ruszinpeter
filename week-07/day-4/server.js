'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config('.env');
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect(err => {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log('connection to database is OK');
});

app.get('/booktitles', (req, res) => {
    conn.query(`SELECT book_name FROM book_mast;`, (err, result) => {
        if (err) {
            console.log(err.toString());
            return;
        }
        console.log('data successfully requested from DB');
        res.send(result);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});