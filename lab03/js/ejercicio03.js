const itemCanvas = document.getElementById('itemCanvas');
const datacdx = itemCanvas.getContext('2d');
const img = document.getElementById('img');

/* IMAGENES */
img.addEventListener('load', (e) => {
  datacdx.drawImage(img, 50, 50, 200, 200);
  console.log('Imagen cargada');
})