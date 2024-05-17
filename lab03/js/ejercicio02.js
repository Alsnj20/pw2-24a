const calculator = document.querySelector('.container');
const content = document.querySelector('.content');
const input = document.querySelector('.input');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clearAC = document.querySelector('#clear');
let arrPila = [];

const inputOperations = document.querySelector('#inputOperations');

equal.addEventListener('click', ()=>{
  let operation = inputOperations.value;
  arrPila.push(inputOperations.value);
  let result = eval(operation);
  arrPila.push(result);
})

clearAC.addEventListener('click', ()=>{
  console.log(arrPila);
})