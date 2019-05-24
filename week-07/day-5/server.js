const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mysql = require('mysql');
require('dotenv').config('.env');
app.use(express.json());
const table = 'posts';

//connect mysql database
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

app.get('/posts', (req, res) => {
    conn.query(`SELECT * FROM ${table};`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            return;
        }
        console.log('data successfully requested from DB');
        res.send(rows);
    });
});

//posts - create new posts -insert reddit.database 
app.post('/posts', (req, res) => {
    conn.query(
        `INSERT INTO ${table} (title, url, user_name) VALUES ("${req.body.title}", ${req.body.url}, ${req.body.user_name});`,
        (err, rows) => {
            if (err) {
                console.log(err.toString());
                return;
            }
            console.log('data successfully added to database');
            res.status(200).send(rows);
        }
    );
}); //req title/url/timestamp/score

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))