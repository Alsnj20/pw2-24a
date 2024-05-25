const edit = (btn) => {
  btn.disabled = true;
  const item = btn.parentElement.parentElement
  const editItem = document.createElement('div');
  const title = document.createElement('input');
  const btnAccept = document.createElement('button');
  const btnCancel = document.createElement('button');
  btnAccept.innerHTML = 'Aceptar';
  btnCancel.innerHTML = 'Cancelar';
  title.setAttribute('placeholder', 'Titulo');
  const description = document.createElement('textarea');
  description.setAttribute('placeholder', 'Descripcion');
  editItem.append(title, description, btnAccept, btnCancel);
  item.appendChild(editItem);
  btnAccept.enabled = false;
}


const btnAccept = (btn,newTitle, newDescription) => {
  
}


const cancel= (btn) => {
  btn.parentElement.remove();
  btn.disabled = false;
}