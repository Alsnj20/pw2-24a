const create = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  //Separar la fecha de la hora
  const parts = date.split('T');
  const datePart = parts[0]; //Fecha
  const timePart = parts[1].replace(':', '-'); //Hora
  if (titleItem && date) {
    console.log("Titulo: " + title, "Descripçion: "+description, "Fecha: " + datePart, "Hora: " + timePart);
    //Enviar la informacion al servidor
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/create', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 0) {
        console.log('Evento mandado al servidor');
        list();
      }
    }
    xhr.send(JSON.stringify({title: title, description: description, date: datePart, time: timePart}));
  }
}

