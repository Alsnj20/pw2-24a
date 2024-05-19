/* Create item general */

const createElement = (tag, atributte = {}, content = '') => {
  const element = document.createElement(tag);
  for (let key in atributte) {
    element.setAttribute(key, atributte[key]);
  }
  element.innerHTML = content;
  return element;
}

const createHeader = () => {
  const header = createElement('header');
  const imgLogoRedVirtual = createElement('img', { src: '../img/logoRedVirtual.jpg', alt: 'Multired' });
  const imgBancoNacion = createElement('img', { src: '../img/bancoNacion.png', alt: 'banco_nacion' });
  header.append(imgLogoRedVirtual, imgBancoNacion);
  return header;
}

const createBtns = (btnData) => {
  return btnData.map(({ class: className = '', id = '', content = '' }) => {
    return createElement('button', { id, class: className }, content);
  });
};

/* This is a scructure HTML */
const generateScructureHTML = () => {
  // Crear container
  const container = createElement('div', { class: 'container' });
  const h1 = createElement('h1', {}, `<img src="../img/candado.png"> Usted se encuentra en una <span>zona segura</span>`);

  // Crear main
  const main = createElement('main');
  const form = createElement('form', { id: 'loginForm' });

  // Crear input groups
  const inputGroup1 = createElement('div', { class: 'inputGroup group' });
  const label1 = createElement('label', { for: 'agencia' }, 'Seleccione:');
  const select1 = createElement('select', { id: 'agencia' });
  const option1 = createElement('option', { value: 'multired' }, 'Multired Global Débito');
  select1.appendChild(option1);
  inputGroup1.append(label1, select1);

  const inputGroup2 = createElement('div', { class: 'inputGroup group' });
  const label2 = createElement('label', { for: 'numeroTarjeta' }, 'Número de tarjeta:');
  const input2 = createElement('input', { type: 'text', id: 'numeroTarjeta' });
  inputGroup2.append(label2, input2);

  const inputGroup3 = createElement('div', { class: 'inputGroup' });
  const label3 = createElement('label', { for: 'tipoDocumento' }, 'Tipo y N° Documento:');
  const divDoc = createElement('div');
  const select2 = createElement('select', { id: 'tipoDocumento' });
  const option2 = createElement('option', { disabled: true, selected: true }, 'Seleccione...');
  const option3 = createElement('option', {}, 'DNI');
  select2.append(option2, option3);
  const input3 = createElement('input', { type: 'text', id: 'dni' });
  divDoc.append(select2, input3);
  inputGroup3.append(label3, divDoc);

  // Crear content div
  const divContent = createElement('div', { class: 'content' });
  const divContent1 = createElement('div', { class: 'content1' });
  const divText = createElement('div', { class: 'text' });
  const label4 = createElement('label', {}, 'Ingresa tu clave usando el teclado virtual:');
  divText.appendChild(label4);

  const vKeyboard = createElement('div', { class: 'vKeyboard' });
  const btnValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'LIMPIAR'];
  btnValues.forEach(value => {
    const btn = createElement('button', { class: 'btn', id: value === 'LIMPIAR' ? 'clear' : '' }, value);
    vKeyboard.appendChild(btn);
  });

  divContent1.append(divText, vKeyboard);
  divContent.appendChild(divContent1);

  form.append(inputGroup1, inputGroup2, inputGroup3, divContent);
  main.appendChild(form);
  container.append(h1, main);
  return container;

}

const createFooter = () => {
  const footer = createElement('footer');
  const p1 = createElement('p', { id: 'place' }, 'Banco de la Nacion | Ministerio de Economía y Finanzas');
  const divOficinas = createElement('div', { id: 'oficinas' });
  const p2 = createElement('p', {}, 'Oficina Principal: Av. Javier Prado Este 2499. San Borja. Central Telefónica: 519 2000.');
  const p3 = createElement('p', {}, 'Atención en Oficinas Administrativas: Lunes a Viernes de 08:30 a 17:30. Refrigerio de: 13:00-14:00.');
  const p4 = createElement('p', {}, 'Atención en Oficina de Trámite Documentario: Lunes a Viernes de 8:30 a 16:30 (horario corrido).');
  divOficinas.append(p2, p3, p4);
  footer.append(p1, divOficinas);
  return footer;
}

document.body.append(createHeader(),generateScructureHTML(), createFooter());

/* Variables */
/* Key Random */
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

btnClear.addEventListener('click', swapNumber);
