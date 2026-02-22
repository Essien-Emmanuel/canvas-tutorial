const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined,
};

document.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle(mouse.x, mouse.y);
});

document.addEventListener("click", (e) => {
  mouse["x"] = e.x;
  mouse["y"] = e.y;
  drawCircle();
});

document.addEventListener("mousemove", (e) => {
  mouse["x"] = e.x;
  mouse["y"] = e.y;
  drawCircle();
});

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI);
  ctx.fill();
}
