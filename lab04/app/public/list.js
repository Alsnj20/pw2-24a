let editButton;
let removeButton;

onload = function () {
    initButtons();
    // list();
    createBlock('2021-10-01', ['Evento 1', 'Evento 2']);
    createBlock('2021-10-02', ['Evento 1', 'Evento 2']);
}

function list() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            list.innerHTML = '';
            data['dates'].forEach(function (day) {
                createBlock(day.date, day.titles);
            });
        }
    }
    xhr.open('GET', '/list', true);
    xhr.send();
}

function initButtons() {
    editButton = document.createElement('button');
    editButton.innerHTML = 'Editar';
    editButton.setAttribute('onclick', 'edit(this)');

    removeButton = document.createElement('button');
    removeButton.innerHTML = 'Eliminar';
    removeButton.setAttribute('onclick', 'remove(this)');
}

function createBlock(date, titles) {
    const div = document.createElement('div');
    const day = document.createElement('p');
    day.innerHTML = date;
    div.appendChild(day);

    titles.forEach(function (title) {
        innerDiv = createEvent(title);
        div.appendChild(innerDiv);
    });

    document.getElementById('list').appendChild(div);
    
}

function createEvent(title) {
    const div = document.createElement('div');
    const elem = document.createElement('li');
    elem.innerHTML = title;
    div.append(elem, editButton.cloneNode(true), removeButton.cloneNode(true));

    return div;
}