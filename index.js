const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius *= 0.9;
drawClock();

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
}

function drawFace(ctx, radius) {
  let grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "black");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "black");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  const clockHands = 12;

  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseLine = "middle";
  ctx.textAlign = "center";

  for (let num = 1; num <= clockHands; num++) {
    let angle = (num * (2 * Math.PI)) / clockHands; // 2pi/12 = pi/6
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.84);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.84);
    ctx.rotate(-angle);
  }
}
