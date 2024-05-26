const remove = (btn) => {
  const item = btn.parentElement;
  dateF = item.parentElement.querySelector('p').textContent;
  dateF = dateF.replace(':', '-');
  console.log(dateF);
  const task = btn.parentElement.parentElement.parentElement;
  console.log(task);
  task.remove();

  //Enviar la informacion al servidor
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/remove', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 0) {
      console.log('Evento eliminado');
      list();
    }
  }
  xhr.send(JSON.stringify({ time: dateF}));
  console.log('Evento mandado al servidor');
}
