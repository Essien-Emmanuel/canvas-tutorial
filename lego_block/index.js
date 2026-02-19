const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.translate(canvas.height / 2, canvas.height / 2);
drawBox();

function drawBox() {
  ctx.beginPath();
  ctx.rect(-25, -25, 50, 50);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

document.addEventListener("mousedown", async (e) => {
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  ctx.save();
  const x = (Math.random() - 0.5) * 200;
  const y = (Math.random() - 0.5) * 200;
  ctx.translate(x, y);

  drawBox();
  ctx.restore();
});
