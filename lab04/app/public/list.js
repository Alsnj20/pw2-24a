let editButton;
let removeButton;

onload = function () {
    initButtons();
    list();
}

function list() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const list = document.getElementById('list');
            list.innerHTML = '';
            data.forEach(function (item) {
                createElement(item);
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

function createElement(item) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    li.innerHTML = item;
    div.append(li, editButton.cloneNode(true), removeButton.cloneNode(true));

    document.getElementById('list').appendChild(div);
}