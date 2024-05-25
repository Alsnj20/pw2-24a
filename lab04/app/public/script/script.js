const addEvent = document.querySelector('#addEvent');
const cancel = document.querySelector('#cancel');
const addBtn = document.querySelector('#add');
const openForm = document.querySelector('dialog');

/* Form */
const form = document.querySelector('dialog form');


/*Dialog*/
addBtn.addEventListener('click', () => {
  openForm.showModal();
  form.reset();
});