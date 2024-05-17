const calculator = document.querySelector('.container');
const content = document.querySelector('.content');
const input = document.querySelector('.input');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clearAC = document.querySelector('#clear');
let arrPila = [];

const pilaContent = document.querySelector('.pilaContent');

const inputOperations = document.querySelector('#inputOperations');

equal.addEventListener('click', ()=>{
  let operation = inputOperations.value;
  arrPila.push(inputOperations.value);
  pilaContent.insertBefore(divItem(operation), pilaContent.firstChild);
  let result = eval(operation);
  arrPila.push(result);
  pilaContent.insertBefore(divItem(result), pilaContent.firstChild);
})

const divItem = (operation)=>{
  const div = document.createElement('div');
  div.classList.add('pilaItem');
  div.textContent = operation;
  return div;
}
