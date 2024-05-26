let editButton;
let removeButton;

onload = () => {
  list();
  initButtons();
}

//Cuando la pagina se carge completamente
const initButtons = () => {
  editButton = document.createElement('button');
  editButton.innerHTML = 'Editar';
  editButton.setAttribute('onclick', 'edit(this)');

  removeButton = document.createElement('button');
  removeButton.innerHTML = 'Eliminar';
  removeButton.setAttribute('onclick', 'remove(this)');
}

const createTask = (title, description, time) => {
  const divTask = document.createElement('div');
  const titleTask = document.createElement('p');
  const descriptionTask = document.createElement('p');
  const dateP = document.createElement('p');
  const divOptions = document.createElement('div');
  divOptions.classList.add('options');
  const div = document.createElement('div');
  titleTask.innerHTML = title;
  descriptionTask.innerHTML = description;
  dateP.innerHTML = time;
  div.append(editButton.cloneNode(true), removeButton.cloneNode(true));
  divOptions.append(div, dateP);
  divTask.append(titleTask, descriptionTask, divOptions);
  divTask.classList.add('task');
  return divTask;
}

const createBlock = (date, data) => {
  const divTasks = document.createElement('div');
  const h2 = document.createElement('h2');
  const divTempo = document.createElement('div');
  h2.innerHTML = date;

  data.forEach((file) => {
    const task = createTask(file.title, file.description, file.time);
    divTempo.appendChild(task);
  });
  divTasks.classList.add('tasks');
  divTasks.append(h2, divTempo);
  document.querySelector('.content-Task').appendChild(divTasks);
}


//Obtiene y muestra la lista de desde el servidor
const list = () => {
  //Solicitud al servidor HTTP
  const xhr = new XMLHttpRequest();
  //Cuando la solicitud se complete
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //Obtiene la respuesta del servidor en formato JSON
      const data = JSON.parse(xhr.responseText);
      data.dates.forEach((day) => {
        createBlock(day.date, day.data);
      });
    }
  }
  xhr.open('GET', '/list', true);
  xhr.send();
};