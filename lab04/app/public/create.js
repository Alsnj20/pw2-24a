const create = () => {
  const titleItem = document.getElementById('create').value;
  const date = document.getElementById('date').value;
  const title = titleItem.substring(0, 4);
  const parts = date.split('T');
  const datePart = parts[0]; //Fecha
  const timePart = parts[1].replace(':', '-'); //Hora
  if (titleItem && date) {
    console.log("Titulo: " + title, "Fecha: " + datePart);
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
    console.log((JSON.stringify({ date: datePart, title: title})));
    xhr.send(JSON.stringify({ date: datePart, title: timePart}));
  }
}

