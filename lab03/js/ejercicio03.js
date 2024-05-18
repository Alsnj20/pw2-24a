const itemCanvas = document.getElementById('itemCanvas');
const datacdx = itemCanvas.getContext('2d');
datacdx.fillStyle = 'red';
datacdx.fillRect(10, 10, 50, 50);
datacdx.fillStyle = 'green';
datacdx.fillRect(0, 0, 100, 50);
datacdx.fillStyle = 'blue';
datacdx.moveTo(20,20);
datacdx.lineTo(100,100);
datacdx.stroke(); // Pintar la línea
/* Draw a circle */
datacdx.beginPath();
/* X/ Y / Radio */
datacdx.arc(200, 100, 50, 0, 2 * Math.PI);
datacdx.stroke();

console.log(datacdx);
