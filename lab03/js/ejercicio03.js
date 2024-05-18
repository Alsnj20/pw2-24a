
const itemCanvas = document.getElementById('itemCanvas');
const datacdx = itemCanvas.getContext('2d');
const roughCanvas = rough.canvas(itemCanvas);
const img = document.getElementById('img');

const stepHagMan = (step) =>{
  switch(step){
    case 0:
      // Estructura principal
      roughCanvas.line(100, 250, 200, 250); // Base
      roughCanvas.line(150, 250, 150, 50);  // Poste vertical
      roughCanvas.line(150, 50, 250, 50);   // Poste horizontal
      roughCanvas.line(250, 50, 250, 100);  // Cuerda
      roughCanvas.circle(250, 125, 50);     // Cabeza
      break;
    case 1:
      roughCanvas.line(250, 150, 250, 200); // Cuerpo
      break;
    case 2:
      roughCanvas.line(250, 200, 225, 250); // Pierna izquierda
      break;
    case 3:
      roughCanvas.line(250, 200, 275, 250); // Pierna derecha
      break;
    case 4:
      roughCanvas.line(250, 150, 225, 200); // Brazo izquierdo
      break;
    case 5:
      roughCanvas.line(250, 150, 275, 200); // Brazo derecho
      break;
  }
}

let step = 0;

const playGame = () =>{
  if(step > 5){
    step = 0;
    datacdx.clearRect(0, 0, itemCanvas.width, itemCanvas.height);
  }
  stepHagMan(step);
  console.log(step);
  step++;
}
