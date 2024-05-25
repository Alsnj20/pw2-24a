const express = require('express');
const fs = require('fs');
const path = require('path');

//Crear una instancia de express
const app = express();

const folders = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda'));


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
  folders = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda'));
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
  const { title, description, date, time } = req.body;
  if (!title || !description || !date || !time) {
    return res.status(400).send('Datos incompletos');
  }

  //Existe o no la fecha
  const dateFolder = path.resolve(__dirname, 'private', 'agenda', date);
  if (!fs.existsSync(dateFolder)) {
    fs.mkdirSync(dateFolder, { recursive: true });
  }

  //Crear el archivo con la informacion del evento
  const filePath = path.resolve(dateFolder, `${time}.txt`);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `${title}\n${description}\n`);
    res.status(201).send('Evento creado');
    console.log('Evento creado');
  } else {
    console.log('Evento ya existe');
  }
});


//Editar un evento
app.post('/edit', (req, res) => {
  console.log('POST /edit');
  //Obtener la informacion del evento
  console.log(req.body);
  const {oldTitle, newTitle, newDescription} = req.body;
  const eventFound = false;
  console.log(folders);
});