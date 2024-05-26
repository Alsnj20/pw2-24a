
const editItem = document.createElement('div');
const title = document.createElement('input');
const description = document.createElement('textarea');
const btnAccept = document.createElement('button');
const btnCancel = document.createElement('button');
let dateF;

const createElement = (btn) => {
  const itemOptions = btn.parentElement;
  if (editItem.style.display === 'none') {
    editItem.style.display = 'block';
  } else {
    btnAccept.innerHTML = 'Aceptar';
    btnCancel.innerHTML = 'Cancelar';
    title.setAttribute('placeholder', 'Titulo');
    description.setAttribute('placeholder', 'Descripcion');
    editItem.classList.add('itemEdit');
    editItem.append(title, description, btnAccept, btnCancel);
    itemOptions.appendChild(editItem);
  }
}

btnCancel.addEventListener('click', () => {
  console.log('Cancelado');
  editItem.style.display = 'none';
})

btnAccept.addEventListener('click', () => {
  if (title.value !== '' || description.value !== '') {
    editItem.style.display = 'none';
    const newTitle = title.value;
    const newDescription = description.value;

    //Enviar la informacion al servidor
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/edit', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 0) {
        console.log('Evento editado');
        list();
      }
    }
    xhr.send(JSON.stringify({title: newTitle, description: newDescription, date: dateF}));
    console.log('Evento mandado al servidor');
    editItem.style.display = 'none';
  } else {
    console.log('Error en editar');
  }
})

const edit = (btn) => {
  const item = btn.parentElement;
  dateF = item.parentElement.querySelector('p').textContent;
  dateF = dateF.replace(':', '-');
  createElement(btn);
}





