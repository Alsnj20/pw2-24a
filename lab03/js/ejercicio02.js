const calculator = document.querySelector('.container');
const content = document.querySelector('.content');
const input = document.querySelector('.input');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

const clearAC = document.querySelector('#clear');
const porcentage = document.querySelector('#percentage');
let operacion = '';

let num1 = '';
let num2 = '';
let operation;
let resultado = '';
let position = 0;

clearAC.addEventListener('click', () => {
  clearAC.textContent = 'AC';
  input.textContent = '0';
  position = 0;
  num1 = '';
  num2 = '';
})

porcentage.addEventListener('click', ()=>{
  num1 = parseFloat(input.textContent)/100;
  input.textContent = num1;
})

content.addEventListener('click', (e) => {
  const btn = e.target;
  const operator = btn.id;
  const action = btn.classList;
  operators.forEach((item)=> item.classList.remove('isAClick'));


  if (operator === 'signNumber') {
    let number = (position === 0) ? num1 : num2;
    if (action.contains('neg')) {
      number = '-' + number;
      input.textContent = number;
      action.remove('neg');
    } else {
      action.add('neg');
    }
    if (position === 0) {
      num1 = number;
    } else {
      num2 = number;
    }
  }
  if (action.contains('number') || operator === 'decimal') {
    clearAC.textContent = 'C';
  }

  if (action.contains('number')) {
    if (position === 0) {
      num1 += btn.textContent;
      input.textContent = num1;
      num1 = parseFloat(num1);
    } else if (position === 2) {
      num2 += btn.textContent;
      input.textContent = num2;
    }
  }

  if (operator === 'decimal') {
    if (position === 0) {
      if(input.textContent === '0'){
        num1 = input.textContent+'.';
      }else{
        num1 += '.';
      }
      input.textContent = num1;
    } else if (position === 2) {
      if(input.textContent === '0'){
        num2 = input.textContent+'.';
      }else{
        num2 += '.';
      }
      input.textContent = num2;
    }
  }
  if (action.contains('operator')) {
    if (operator === 'times' || operator === 'plus' || operator === 'minus' || operator === 'divided') {
      btn.classList.add('isAClick');
      operation = operator;
      position = 2;
    }
  }
})

equal.addEventListener('click', () => {
  num1 = parseFloat(num1);
  console.log(num1);
  num2 = parseFloat(num2);
  console.log(num2);
  switch (operation) {
    case 'plus': resultado = num1 + num2;
      break;
    case 'minus': resultado = num1 - num2;
      break;
    case 'times': resultado = num1 * num2;
      break;
    case 'divided': 
      if(num2 === 0){
        resultado = 'Error';
       }else{
        resultado = num1 / num2;
       } 
      break;
  }
  input.textContent = resultado + '';
  position = 0;
  num1 = resultado;
  num2 = '';
})