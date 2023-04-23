import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

type ColorName = "border" | "background";

export const colorPalette: Record<ColorName, string> = {
  border: "green",
  background: "black",
};

export function setUpUI(attract: boolean) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const headerTitle = document.getElementById(attract ? "empty-root" : "empty");
  headerTitle?.appendChild(canvas);

  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.imageSmoothingEnabled = false;
  context.imageSmoothingQuality = "high";
  return context;
}
