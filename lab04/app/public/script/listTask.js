/*let editButton;
let removeButton;

//Cuando la pagina se carge completamente
onload = () =>{ 
    initButtons();
    list();
}

const initButtons = () => {
    editButton = document.createElement('button');
    editButton.innerHTML = 'Editar';
    editButton.setAttribute('onclick', 'edit(this)');

    removeButton = document.createElement('button');
    removeButton.innerHTML = 'Eliminar';
    removeButton.setAttribute('onclick', 'remove(this)');
}

const createTask = (title) => {
    const divTask = document.createElement('div');
    const titleTask = document.createElement('p');
    const divOptions = document.createElement('div');
    divOptions.classList.add('options');
    titleTask.innerHTML = title;
    divOptions.append(editButton.cloneNode(true), removeButton.cloneNode(true));
    divTask.append(titleTask, divOptions);
    return divTask;
}

const createBlock = (date, titles) => {
    const divDateTasks = document.createElement('div');
    const divTitles = document.createElement('p');
    const divTasks = document.createElement('ul');
    
    divTitles.innerHTML = date;

    titles.forEach((title) =>{
        const li = document.createElement('li');
        const task = createTask(title);
        li.appendChild(task);
        divTasks.appendChild(li);
    });

    divDateTasks.append(divTitles, divTasks);
    document.getElementById('list').appendChild(divDateTasks);
}


//Obtiene y muestra la lista de desde el servidor
const list = () => {
    //Solicitud al servidor HTTP
    const xhr = new XMLHttpRequest();
    //Cuando la solicitud se complete
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4 && xhr.status === 200) {
            //Obtiene la respuesta del servidor en formato JSON
            const data = JSON.parse(xhr.responseText);
            console.log(data.dates);
            data.dates.forEach((day) => {
                console.log(day.title, day.description, day.time);
                /*console.log(day.date, day.titles);
                createBlock(day.date, day.titles);
            });
            console.log(data);
        }
    }
    xhr.open('GET', '/list', true);
    xhr.send();
}*/

