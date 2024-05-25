const express = require('express');
const fs = require('fs');
const path = require('path');

//Crear una instancia de express
const app = express();


//Cualquier archivo desde la carpeta public sera accedido desdee el navegador
app.use(express.static("public"))

//Configurar express para recibir JSON
app.use(express.json());

//Iniciar el servidor
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

//Servidor responde
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//Listar eventos
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

//Crear un evento
app.post('/create', (req, res) => {
    console.log('POST /create');
    //Obtener la informacion del evento
    console.log(req.body);
    const { date, title} = req.body;
    console.log(date, title);

    if (!date || !title) {
        return res.status(400).send('Datos incompletos');
    }

    //Existe o no la fecha

    const dateFolder = path.resolve(__dirname, 'private', 'agenda', date);
    if (!fs.existsSync(dateFolder)) {
        fs.mkdirSync(dateFolder,{ recursive: true });
    }

    //Crear el archivo con la informacion del evento
    const filePath = path.resolve(dateFolder, `${title}.txt`);
    fs.writeFileSync(filePath, "hola");
    res.status(201).send('Evento creado');
});