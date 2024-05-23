const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static("public"))


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


app.get('/list', (req, res) => {
    fs.readdir(path.resolve(__dirname, 'private', 'agenda'), (err, files) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(files);
    });
});