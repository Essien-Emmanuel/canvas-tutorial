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
