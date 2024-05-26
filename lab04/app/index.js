const express = require('express');
const fs = require('fs');
const path = require('path');
const { title } = require('process');

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
    dates: [{
      date: '2021-09-01',
      data: [
      {
        title: 'Evento 1',
        description: 'Descripcion del evento 1',
        time: '10:00'
      },  
      {
        title: 'Evento 2',
        description: 'Descripcion del evento 2',
        time: '11:00'
      }
      ]
    },],
  };
  //Lectura de directorios
  folders.forEach((folder) => {
    const files = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda', folder))
    files.forEach((file) => {
      const content = fs.readFileSync(path.resolve(__dirname, 'private', 'agenda', folder, file), 'utf8')
      //Datos del evento
      let dateObj = data.dates.find(carpeta => carpeta.date === folder);
      if (!dateObj) {
        dateObj = {
          date: folder,
          data: []
        };
        data.dates.push(dateObj);
      }
      dateObj.data.push({
        title: content.substring(0, content.indexOf('\n')),
        description: content.substring(content.indexOf('\n')+1, content.length),
        time: file.substring(0, file.indexOf('.'))
      })
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
  const {newTitle, newDescription, date} = req.body;
  const eventFound = false;
  console.log(folders);
  /*folders.forEach((folder) => {
    const files = fs.readdirSync(path.resolve(__dirname, 'private', 'agenda', folder))
    files.forEach((file) => {
      const content = fs.readFileSync(path.resolve(__dirname, 'private', 'agenda', folder, file), 'utf8')
      if (content.includes(date)) {
        fs.writeFileSync(path.resolve(__dirname, 'private', 'agenda', folder, file), `${newTitle}\n${newDescription}\n`);
        eventFound = true;
      }
    });
  });*/
});