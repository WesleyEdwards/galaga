import { CANVAS_BORDER, CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/helpers/constants";
import { colorPalette } from "../game/helpers/drawingHelpers";

export const life_image =
  "https://user-images.githubusercontent.com/97990557/232162608-c3dd6a55-fba6-42f4-a4a8-888ee9fd9139.png";

export function fetchImage(): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src =
      "https://user-images.githubusercontent.com/97990557/221115615-a28fc95a-755b-452b-9699-0d0b12edcb42.JPG";
    image.onload = () => resolve(image);
    image.onerror = () => reject();
  });
}

export function displayWords(
  message: string,
  canvas: CanvasRenderingContext2D
) {
  canvas.font = `${40}px Arial`;
  canvas.fillStyle = "green";
  canvas.textAlign = "center";

  canvas.fillText(message, CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.5);
}

export function drawBackground(context: CanvasRenderingContext2D) {
  context.fillStyle = colorPalette.background;
  context.strokeStyle = colorPalette.border;
  context.lineWidth = CANVAS_BORDER;
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
