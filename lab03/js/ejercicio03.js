const itemCanvas = document.getElementById('itemCanvas');
const datacdx = itemCanvas.getContext('2d');

/* RECTANGULOS */
datacdx.fillStyle = 'red'; /* Color de relleno */
/* Rellenando x, y, ancho, alto */
datacdx.fillRect(10, 10, 50, 50);
datacdx.fillStyle = 'green';
datacdx.fillRect(0, 0, 100, 50);
/* Limpiar un rectangulo */
datacdx.clearRect(60, 20, 10, 10);

/* LINEAS */
datacdx.beginPath();
/* Coordenadas donde inicia 1 lineas */
datacdx.moveTo(20,20);
/* Coordenadas donde termina 1 lineas */
datacdx.lineTo(100,100);
/* Anocho de la linea */
datacdx.lineWidth = 5;
/* Como termina la linea (butt, round, square) */
datacdx.lineCap = "round";
datacdx.stroke(); // Pintar la línea
datacdx.closePath(); // Cerrar la línea

datacdx.beginPath();
/* bordes de un rectangulo */
datacdx.strokeStyle = 'yellow';
datacdx.strokeRect(10, 10, 50, 50);
datacdx.clearRect(5, 10, 10, 10);

/* CIRCULOS */
datacdx.beginPath();
/* Draw some */
/* x, y, radio, angulo inicial, angulo final (2pi que es 360°)*/
datacdx.arc(200, 150, 40, 0, 2 * Math.PI);
/* Abrevitura de color y stroke */
datacdx.strokeStyle = 'blue';
datacdx.stroke();
datacdx.fillStyle = 'yellow';
datacdx.fill();
datacdx.closePath();

/* CURVAS */
datacdx.beginPath();
datacdx.moveTo(200, 200);
/* x, y, x1, y1, x2, y2 */
datacdx.quadraticCurveTo(200, 250, 300, 200);
datacdx.strokeStyle = 'red';
datacdx.stroke();

datacdx.closePath();

datacdx.beginPath();
datacdx.strokeStyle = 'purple';
datacdx.moveTo(20, 10);
datacdx.bezierCurveTo(400, 300, 100, 100, 400, 250);
datacdx.stroke();


/* GRADIENTES */
const grad = datacdx.createLinearGradient(0, 0, 280, 0);
grad.addColorStop(0, 'red');
grad.addColorStop(0.5, 'green');
datacdx.fillStyle = grad;
datacdx.fillRect(0, 0, 280, 100);


/* FONT */
datacdx.font = '30px Arial';
/* Color del texto */
datacdx.fillStyle = grad;
datacdx.fillText('Hola mundo', 100, 200);

datacdx.strokeStyle = grad;
datacdx.lineWidth = 1.5;
datacdx.strokeText('Hola mundo', 100, 250);