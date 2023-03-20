import {
  bgImageUrl,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  colorPalette,
  STATS_BOX_TOP,
} from "./constants";

export function canvasBackground(context: CanvasRenderingContext2D) {
  const image = new Image(CANVAS_WIDTH, CANVAS_HEIGHT);
  image.src = bgImageUrl;
  context.drawImage(image, 0, 0, CANVAS_WIDTH, STATS_BOX_TOP);
}

export function canvasBoarder(context: CanvasRenderingContext2D) {
  context.strokeStyle = colorPalette.border;
  context.lineWidth = 10;
  context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  context.beginPath();
  context.moveTo(0, CANVAS_HEIGHT - 100);
  context.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT - 100);
  context.stroke();
}

export function drawCircle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string
) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fill();
}
