const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static('assets'))
app.set('view engine');
// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let input = req.query.input;
    let object = { 'received': input * 1, 'result': input * 2 }
    if (!input) {
        res.send({ "error": "Please provide an input!" });
    } else {
        res.send(object);
    }
});

app.get('/greeter', (req, res) => {
    let inputName = req.query.name;
    let inputTitle = req.query.title;
    let answer = {}
    if (!inputName && !inputTitle) {
        answer.error = 'Please provide a name and title';
    } else if (!inputName) {
        answer.error = 'Please provide a name!';
    } else if (!inputTitle) {
        answer.error = 'Please provide a title';
    } else {
        answer.welcome_message = `Oh, hi there ${inputName}, my dear ${inputTitle}!`
    }
    console.log(inputName);
    console.log(inputTitle);
    res.send(answer);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});