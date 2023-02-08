//reference to the <canvas> element
const canvas = document.getElementById('myCanvas');
//ctx is used to store the 2d rendering context - the actual tool we can use to paint on the canvas
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
};
setInterval(draw, 10);
