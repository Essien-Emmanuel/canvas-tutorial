import { generateRandomRGBA, generateRandomArcParams } from "../helper.js";

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
  ctx.fillStyle = generateRandomRGBA();
  ctx.fill();
  ctx.restore();
}
