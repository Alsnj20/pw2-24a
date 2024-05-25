const express = require('express');
const fs = require('fs');
const path = require('path');

//Crear una instancia de express
const app = express();


//Cualquier archivo desde la carpeta public sera accedido desdee el navegador
app.use(express.static("public"))

//Iniciar el servidor
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

//Servidor responde
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list', (req, res) => {
    console.log('GET /list');
    //Fecha y titulo del evento
    const data = {
        dates: []
    };
    //Lectura de directorios
    const folders = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda'));
    folders.forEach((folder) => {
        const files = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda', folder))
        const titles = [];
        files.forEach((file) => {
            const content = fs.readFileSync(path.resolve(__dirname, 'private', 'agenda', folder, file), 'utf8')
            //Agregar el titulo del evento
            titles.push(content.substring(0, content.indexOf('\n')));
        });
        console.log(titles);
        data.dates.push({
            date: folder,
            titles: titles
        });
    });
    console.log(data);
    res.json(data);
});