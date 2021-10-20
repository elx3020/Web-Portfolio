// get canvas element

const canvas = document.querySelector("#draw");
// select the type of canvas
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
// giving canvas the size of the window object;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//makes a round brush
ctx.lineJoin = "round";
ctx.lineCap = "round";

//variables to draw
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 1;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (lineWidth >= 20) return;

  lineWidth++;
  ctx.lineWidth = lineWidth;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lineWidth = 1;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineWidth = lineWidth;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => (isDrawing = false));
