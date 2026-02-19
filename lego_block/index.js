const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.translate(canvas.width / 2, canvas.height / 2);
const halfBox = 25;
drawBox();

function drawBox() {
  ctx.beginPath();
  ctx.rect(-halfBox, -halfBox, 50, 50);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = "red";
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
  let x = e.clientX - canvas.width / 2 - canvasRect.left;
  let y = e.clientY - canvas.height / 2 - canvasRect.top;

  x = Math.min(x, canvas.width / 2) - 50;
  x = Math.max(x, -canvas.width / 2) + 25;
  y = Math.min(y, canvas.height / 2) - 50;
  y = Math.max(y, -canvas.height / 2) + 25;

  ctx.translate(x, y);

  drawBox();
  ctx.restore();
});
