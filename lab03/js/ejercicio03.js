const itemCanvas = document.getElementById('itemCanvas');
const datacdx = itemCanvas.getContext('2d');
const img = document.getElementById('img');

const stepHagMan = (step) =>{
  switch(step){
    case 0:
      datacdx.beginPath();
      /* Inicial */
      /* - */
      datacdx.moveTo(100, 250);
      datacdx.lineTo(200, 250);
      /* | */
      datacdx.moveTo(150, 250);
      datacdx.lineTo(150, 50);
      /* - */
      datacdx.moveTo(150, 50);
      datacdx.lineTo(250, 50);
      /* | */
      datacdx.moveTo(250, 50);
      datacdx.lineTo(250, 100);
      datacdx.stroke();
      datacdx.closePath();
      /* O */
      datacdx.beginPath();
      datacdx.stroke();
      datacdx.arc(250, 125, 25, 0, 2 * Math.PI);
      datacdx.stroke();
      break;
    case 1:
      /* | */
      datacdx.beginPath();
      datacdx.moveTo(250, 150);
      datacdx.lineTo(250, 200);
      datacdx.stroke();
      break;
    case 2:
      /* / */
      datacdx.beginPath();
      datacdx.moveTo(250, 200);
      datacdx.lineTo(225, 250);
      datacdx.stroke();
      break;
    case 3:
      /* \ */
      datacdx.beginPath();
      datacdx.moveTo(250, 200);
      datacdx.lineTo(275, 250);
      datacdx.stroke();
      break;
    case 4:
      /* / */
      datacdx.beginPath();
      datacdx.moveTo(250, 150);
      datacdx.lineTo(225, 200);
      datacdx.stroke();
      break;
    case 5:
      /* \ */
      datacdx.beginPath();
      datacdx.moveTo(250, 150);
      datacdx.lineTo(275, 200);
      datacdx.stroke();
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