const CLOCK_HOURS = 12;
const RADIANS_PER_12_HOUR = (2 * Math.PI) / CLOCK_HOURS; // (2pi / 12 hours)

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius *= 0.9;
drawClock();
setInterval(() => {
  drawClock();
}, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
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
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let num = 1; num <= CLOCK_HOURS; num++) {
    let angle = num * RADIANS_PER_12_HOUR;
    ctx.save();
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.restore();
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // hour
  hour = hour % 12;
  hour =
    hour * RADIANS_PER_12_HOUR +
    minute * (RADIANS_PER_12_HOUR / 60) +
    (second * RADIANS_PER_12_HOUR) / 3600;
  drawHand(ctx, hour, radius * 0.5, radius * 0.06);

  // minute
  minute = (minute * 2 * Math.PI) / 60 + (second * 2 * Math.PI) / 3600;
  drawHand(ctx, minute, radius * 0.7, radius * 0.054);

  // second
  let ms = now.getMilliseconds();
  second = ((second + ms / 1000) * 2 * Math.PI) / 60;
  //   second = (second * 2 * Math.PI) / 60;
  drawHand(ctx, second, radius * 0.8, radius * 0.03);
}

function drawHand(ctx, pos, length, width) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
  ctx.restore();
}
