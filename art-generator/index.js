// add canvas element
const canvasElement = document.createElement("canvas");
document.body.appendChild(canvasElement);
canvasElement.setAttribute("class", "canvas");
const canvas = document.querySelector(".canvas");
canvas.setAttribute("width", 400);
canvas.setAttribute("height", 400);
canvas.style.border = "1px solid black";

// canvas
const ctx = canvas.getContext("2d");

setInterval(drawCircle, 1000);

function drawCircle() {
  ctx.save();
  ctx.beginPath();
  const { randRadius, randX, randY } = generateRandomArcParams();
  ctx.arc(randX, randY, randRadius, 0, 2 * Math.PI);
  ctx.fillStyle = generateRandomColor();
  ctx.fill();
  ctx.restore();
}

function generateRandomArcParams() {
  const randRadius = Math.min(50, Math.floor(Math.random() * 50) + 20);
  const randX = Math.min(Math.floor(Math.random() * 400) + 1, 400);
  const randY = Math.min(Math.floor(Math.random() * 400) + 1, 400);
  return { randRadius, randX, randY };
}

function generateRandomColor() {
  const randR = Math.floor(Math.random() * 255) + 1;
  const randG = Math.floor(Math.random() * 255) + 1;
  const randB = Math.floor(Math.random() * 255) + 1;
  const randA = Math.random();
  return `rgba(${randR}, ${randG}, ${randB}, ${randA})`;
}
