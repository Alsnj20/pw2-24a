/* Create item general */

const createElement = (tag, atributte = {}, content = '') => {
  const element = document.createElement(tag);
  for (let key in atributte) {
    element.setAttribute(key, atributte[key]);
  }
  element.innerHTML = content;
  return element;
}

const createBtns = (btnData) => {
  return btnData.map(({ class: className = '', id = '', content = '' }) => {
    return createElement('button', { id, class: className }, content);
  });
};

const createHistory = () => {
  const pila = createElement('section', { class: 'pila' });
  const pilaTitle = createElement('h2', {}, 'Historial');
  const pilaContent = createElement('div', { class: 'pilaContent' });
  pila.append(pilaTitle, pilaContent);
  return pila;
}

/* This is a scructure HTML */
const generateScructureHTML = () => {
  // items HTML
  const main = createElement('main', { class: ''});
  const aside = createElement('aside', { class: '' });
  const h1 = createElement('h1', {}, 'Calculator');
  /* MENU */
  const divMenu = createElement('div', { class: 'menu' });
  const divUndo = createElement('div', {}, "<i class='bx bx-undo'></i> Deshacer");
  const divBasic = createElement('div', {}, 'Básico<i class="bx bx-chevron-down"></i>');
  const divOptions = createElement('div', { id: 'options' });
  /* divOptions que tiene divLines */
  const divLines = createElement('div', { id: 'lines' });
  /* div Lines */
  const divRest = createElement('div', { class: 'rest' }, "<i class='bx bx-minus'></i>");
  const divSquare = createElement('div', { class: 'square' }, "<i class='bx bx-square'></i>");
  const divExit = createElement('div', { class: 'exit' }, "<i class='bx bx-x'></i>");

  /* INPUT OPERATIONS */
  const inputOperations = createElement('input', { id: 'inputOperations', type: 'text', value: '0' });

  /* CONTAINER */
  const divContainer = createElement('div', { class: 'container' });
  const divContent = createElement('div', { class: 'content' });

  const btnsCalculator = [
    { id: 'clear', content: 'AC', class: 'cls' },
    { id: 'bracketOpen', content: '(', class: '' },
    { id: 'bracketClose', content: ')', class: '' },
    { id: 'mod', content: 'mod', class: '' },
    { content: '&pi;' },
    { content: '7', class: 'number' },
    { content: '8', class: 'number' },
    { content: '9', class: 'number' },
    { id: 'divided', content: '&divide;', class: 'operator' },
    { id: 'sqrt', content: '√', class: 'operator' },
    { content: '4', class: 'number' },
    { content: '5', class: 'number' },
    { content: '6', class: 'number' },
    { id: 'times', content: '&times;', class: 'operator' },
    { id: 'square', content: 'x²', class: 'operator' },
    { content: '1', class: 'number' },
    { content: '2', class: 'number' },
    { content: '3', class: 'number' },
    { id: 'minus', content: '-', class: 'operator' },
    { id: 'equal', content: '=', class: 'operator' },
    { content: '0', class: 'number' },
    { id: 'decimal', content: '.', class: 'h' },
    { id: 'percentage', content: '%', class: 'cls' },
    { id: 'plus', content: '+', class: 'operator' }
  ];

  // Add Elemnts to DOM
  divLines.append(divRest, divSquare, divExit);
  divOptions.appendChild(divLines);
  divMenu.append(divUndo, divBasic, divOptions);
  divContent.append(...createBtns(btnsCalculator));
  divContainer.append(divMenu, inputOperations, divContent);
  aside.append(h1, divContainer);
  main.append(aside, createHistory());
  return main;
}

const createFooter = () => {
  const footer = createElement('footer');
  const footerLink = createElement('a', { href: 'https://github.com/Alsnj20/pw2-24a/tree/main/lab03', target: '_blank' });
  const footerText = createElement('p', {}, 'Copyright &copy; 2024 Alsnj20 :)');
  footerLink.appendChild(footerText);
  footer.appendChild(footerLink);
  return footer;
}
document.body.append(generateScructureHTML(), createFooter());

/* Variables */
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

equal.addEventListener('click', () => {
  let operation = inputOperations.value;
  arrPila.push(inputOperations.value);
  pilaContent.insertBefore(divItem(operation), pilaContent.firstChild);
  let result = eval(operation);
  arrPila.push(result);
  pilaContent.insertBefore(divItem(result), pilaContent.firstChild);
})

const divItem = (operation) => {
  const div = document.createElement('div');
  div.classList.add('pilaItem');
  div.textContent = operation;
  return div;
}
