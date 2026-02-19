import { generateRandomColor } from "../helper.js";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let fillStyle = "red";

ctx.translate(x, y);
const boxLength = 50;
const halfBoxLength = boxLength / 2;
drawBox(boxLength, fillStyle);

function drawBox(boxLength, fillStyle) {
  ctx.beginPath();
  ctx.rect(-boxLength / 2, -boxLength / 2, boxLength, boxLength);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

document.addEventListener("mousemove", (e) => {
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  ctx.save();
  const canvasRect = canvas.getBoundingClientRect();
  let clientX = e.clientX - canvas.width / 2 - canvasRect.left;
  let clientY = e.clientY - canvas.height / 2 - canvasRect.top;

  const limitX = canvas.width / 2 - halfBoxLength;
  const limitY = canvas.height / 2 - halfBoxLength;

  x = Math.max(-limitX, Math.min(clientX, limitX));
  y = Math.max(-limitY, Math.min(clientY, limitY));

  ctx.translate(x, y);
  drawBox(boxLength, fillStyle);
  ctx.restore();
});

document.addEventListener("mousedown", () => {
  fillStyle = generateRandomColor();
});
