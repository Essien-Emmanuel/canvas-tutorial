export function generateRandomColor() {
  const colors = [
    "green",
    "blue",
    "cyan",
    "grey",
    "purple",
    "cyan",
    "orange",
    "yellow",
    "brown",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

export function generateRandomArcParams() {
  const randRadius = Math.min(50, Math.floor(Math.random() * 50) + 20);
  const randX = Math.min(Math.floor(Math.random() * 400) + 1, 400);
  const randY = Math.min(Math.floor(Math.random() * 400) + 1, 400);
  return { randRadius, randX, randY };
}

export function generateRandomRGBA() {
  const randR = Math.floor(Math.random() * 255) + 1;
  const randG = Math.floor(Math.random() * 255) + 1;
  const randB = Math.floor(Math.random() * 255) + 1;
  const randA = Math.random();
  return `rgba(${randR}, ${randG}, ${randB}, ${randA})`;
}
