const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

document.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle(mouse.x, mouse.y);
});

const mouse = {
  x: null,
  y: null,
};
document.addEventListener("click", (e) => {
  mouse["x"] = e.x;
  mouse["y"] = e.y;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
});

function drawCircle() {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
