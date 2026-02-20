import { generateRandomColor } from "../helper.js";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// STATE
const boxLength = 50;
let color = "red";
let targetX = 0;
let targetY = 0;
let boxX = 0;
let boxY = 0;
let ease = 0.08;

ctx.translate(canvas.width / 2, canvas.height / 2);

function drawBox(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.rect(-boxLength / 2, -boxLength / 2, boxLength, boxLength);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  let rawX = e.clientX - canvas.width / 2 - rect.left;
  let rawY = e.clientY - canvas.height / 2 - rect.top;

  const limitX = canvas.width / 2 - boxLength / 2;
  const limitY = canvas.height / 2 - boxLength / 2;

  targetX = Math.max(-limitX, Math.min(rawX, limitX));
  targetY = Math.max(-limitY, Math.min(rawY, limitY));
});

document.addEventListener("mousedown", () => {
  color = generateRandomColor();
});

function animate() {
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  boxX += (targetX - boxX) * ease;
  boxY += (targetY - boxY) * ease;

  drawBox(boxX, boxY, color);
  requestAnimationFrame(animate);
}

animate();
