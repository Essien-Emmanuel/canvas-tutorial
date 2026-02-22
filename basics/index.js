const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const particlesArray = [];
let hue = 0;

const mouse = {
  x: undefined,
  y: undefined,
};
class Particle {
  constructor() {
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 16 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue},100%,50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

document.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.addEventListener("click", (e) => {
  mouse["x"] = e.x;
  mouse["y"] = e.y;
});

document.addEventListener("mousemove", (e) => {
  mouse["x"] = e.x;
  mouse["y"] = e.y;
  for (let i = 0; i < 3; i++) {
    particlesArray.push(new Particle());
  }
});

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.02";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue++;
  requestAnimationFrame(animate);
}
animate();
