import { generateRandomArcParams } from "../helper.js";

// add canvas element
const canvasElement = document.createElement("canvas");
document.body.appendChild(canvasElement);
canvasElement.setAttribute("class", "canvas");

const canvas = document.querySelector(".canvas");
canvas.setAttribute("width", 500);
canvas.setAttribute("height", 500);
canvas.style.border = "1px solid black";

// canvas
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);

drawTarget();
drawSnake();

function drawTarget() {
  ctx.save();
  ctx.translate(0, 0);
  ctx.beginPath();
  const { randX, randY } = generateRandomArcParams();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(0,0,0,0.8)";
  ctx.fill();
  ctx.restore();
}

function drawSnake() {
  drawSnakeHead();
  drawSnakeBody();
}

function drawSnakeHead() {
  ctx.save();
  ctx.beginPath();
  ctx.rect(10, 10, 10, 17);
  ctx.fill();
  ctx.restore();
}

function drawSnakeBody() {
  ctx.save();
  ctx.beginPath();
  ctx.rect(20, 13.5, 10, 10);
  ctx.fill();
}
