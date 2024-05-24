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
    console.log('GET /list');
    const data = {
        dates: []
    };
    const folders = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda'));
    folders.forEach(function (folder) {
        files = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda', folder))
        const titles = [];
        files.forEach(function (file) {
            content = fs.readFileSync(path.resolve(__dirname, 'private', 'agenda', folder, file), 'utf8')
            titles.push(content.substring(0, content.indexOf('\n')));
        });
        data.dates.push({
            date: folder,
            titles: titles
        });
        console.log("Entro "+folder);
    });
    console.log(data);
    res.json(data);
});