/* Method General for create Element */
const createElement = (tag, atributte = {}, content = '') => {
  const element = document.createElement(tag);
  for (let key in atributte) {
    element.setAttribute(key, atributte[key]);
  }
  element.innerHTML = content;
  return element;
}

/* Create Keyboard */
const createKeyBoard = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const btns = [];
  for (const letter of letters) {
    const btn = createElement('button', { class: 'btn' }, letter);
    btns.push(btn);
  }
  return btns;
}

/* This is a scructure HTML */
const generateScructureHTML = () => {
  const main = createElement('main');
  const h1 = createElement('h1', {}, 'HANG MAN');
  const container = createElement('div', { class: 'container' });
  const canvas = createElement('canvas', { width: '400px', height: '500px', id: 'itemCanvas' });
  const content = createElement('div', { class: 'content' });
  const contentText = createElement('div', { class: 'content_Text' });
  const h2 = createElement('h2', {}, 'Palabra a adivinar');
  const word = createElement('p', { id: 'word' });
  const divkeyAttem = createElement('div');
  const keyLabel = createElement('p', {}, 'Palabra Buscada:<span id="key"></span>');
  const attemptsLabel = createElement('p', {}, 'Intentos:<span id="attempts"></span>');
  const keyBoard = createElement('div', { class: 'keyBoard' });
  const letterBtns = createKeyBoard();
  const options = createElement('div', { class: 'options' });
  const startButton = createElement('button', { id: 'start' }, 'Start Game');

  /* Rest Operator, Propagacion */
  console.log(letterBtns);
  keyBoard.append(...letterBtns);
  divkeyAttem.append(keyLabel, attemptsLabel);
  contentText.append(h2, word, divkeyAttem);
  content.append(contentText, keyBoard, options);
  options.append(startButton);
  container.append(canvas, content);
  main.append(h1, container);
  return main;
}

document.body.append(generateScructureHTML());

/* Variables */
const keyBoard = document.querySelector('.keyBoard');
const btnStartGame = document.querySelector('#start');
const word = document.querySelector('#word');
const key = document.querySelector('#key');
const attempts = document.querySelector('#attempts');

const itemCanvas = document.querySelector('#itemCanvas');
const datacdx = itemCanvas.getContext('2d');
const roughCanvas = rough.canvas(itemCanvas);
roughCanvas.rectangle(0, 0, 370, 490);

const words = ["hola", "mundo", "javascript", "programacion", "teclado", "monitor", "mouse", "ventana", "puerta"];
let attemp = 7;
let step = 0;

/* Start Game */

const randomWord = () => words[Math.floor(Math.random() * words.length)];

const whiteSpace = (word) => {
  let whiteSpace = '';
  for (let i = 0; i < word.length; i++) {
    whiteSpace += '_';
  }
  return whiteSpace;
}

let wordSearch = '';
let wordActually = '';


const startGame = () => {
  resetGame();
  wordSearch = randomWord().toUpperCase();
  wordActually = whiteSpace(wordSearch);
  word.textContent = resetWord(wordActually);
  attempts.textContent = " " + attemp;
  console.log(btnStartGame);
}
const resetWord = (word) => {
  return word.split('').join(' ');
}

/* Reset Game */
const resetGame = () => {
  btnStartGame.enabled = true;
  wordSearch = '';
  word.textContent = '';
  attempts.textContent = '';
  key.textContent = '';
  attemp = 7;
  step = 0;
  datacdx.clearRect(0, 0, itemCanvas.width, itemCanvas.height);
  stepHagMan(step);
  Array.from(keyBoard.children).forEach((btnL) => {
    btnL.classList.remove('touched');
  })
}
/* Play Game */

const checkWord = (word, wordActually, letter) => {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newWord += letter;
    } else if (wordActually[i] === word[i]) {
      newWord += word[i];
    } else {
      newWord += "_";
    }
  }
  return newWord;
}

const restartAttemp = () => {
  attemp--;
  attempts.textContent = " " + attemp;
}

const stepHagMan = (step) => {
  switch (step) {
    case 0:
      // Estructura principal
      roughCanvas.line(50, 450, 200, 450); // Base
      roughCanvas.line(125, 450, 125, 50);  // Poste vertical
      roughCanvas.line(125, 50, 280, 50);   // Poste horizontal
      roughCanvas.line(280, 50, 280, 100);  // Cuerda
      roughCanvas.circle(280, 140, 80);     // Cabeza
      break;
    case 1:
      roughCanvas.line(280, 180, 280, 350); // Cuerpo
      break;
    case 2:
      roughCanvas.line(280, 350, 240, 450); // Pierna izquierda
      break;
    case 3:
      roughCanvas.line(280, 350, 320, 450); // Pierna derecha
      break;
    case 4:
      roughCanvas.line(280, 280, 220, 200); // Brazo izquierdo
      break;
    case 5:
      roughCanvas.line(280, 280, 340, 200); // Brazo derecho
      break;
    case 6:
      roughCanvas.circle(280, 140, 80);     // Cabeza
      // Ojo derecho
      roughCanvas.line(270, 130, 260, 120);
      roughCanvas.line(260, 130, 270, 120);
      // Ojo izquierdo
      roughCanvas.line(290, 130, 300, 120);
      roughCanvas.line(300, 130, 290, 120);
      // Boca
      roughCanvas.line(270, 150, 300, 145, 4);
      // Lengua
      roughCanvas.arc(280, 148, 20, 10, 0, 0.6 * Math.PI, true);
      break;
  }
}

const playGame = (value) => {
  console.log(wordSearch, wordActually);
  if (wordSearch.includes(value)) {
    wordActually = checkWord(wordSearch, wordActually, value);
    console.log("Word Actually " + wordActually);
    word.textContent = resetWord(wordActually);
    if (wordSearch === wordActually) {
      alert('Ganaste');
      resetGame();
    }
  } else {
    console.log("No contiene la letra");
    restartAttemp();
    stepHagMan(step);
    step++;
    console.log(step);
  }

  if (attemp === 0) {
    console.log("Perdiste");
    console.log(step, attemp);
    attemp.textContent = attemp;
    stepHagMan(step);
    key.textContent = " " + wordSearch;
    alert('Perdiste');
  }
}


keyBoard.addEventListener('click', (e) => {
  console.log("Click");
  let letterBtn = e.target;
  console.log(letterBtn);
  if (letterBtn.classList.contains('btn') && !letterBtn.classList.contains('touched')) {
    let value = letterBtn.textContent;
    playGame(value);
    letterBtn.classList.add('touched');
  }
});

btnStartGame.onclick = startGame;




