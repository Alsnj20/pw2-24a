

const btnClear = document.querySelector('#clear');
const btnNumber = document.querySelectorAll('.btn');


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberSelect = [];
let number = '';


const swapNumber = () => {
  btnNumber.forEach((btn) => {
    console.log(btn)
    let num;
    do {
      num = parseInt(Math.random() * numbers.length);
    } while (numberSelect.includes(num));
    numberSelect.push(num);
    btn.textContent = numbers[num];
  })
}

btnClear.addEventListener('click', swapNumber())