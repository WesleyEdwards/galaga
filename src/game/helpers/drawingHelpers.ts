import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

type ImageName = "player" | "bullet" | "life_image";

export const images: Record<ImageName, string> = {
  player:
    "https://steamuserimages-a.akamaihd.net/ugc/3336348870692605210/2DB65000D1AE5B34BCEC2E3E91A27537B3EFC057/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
  bullet:
    "https://user-images.githubusercontent.com/97990557/226824371-87cc9b0c-ff7a-47b7-8aa7-f047f6267dff.png",
  life_image:
    "https://user-images.githubusercontent.com/97990557/209986272-22157ab1-35ba-4ff1-9173-f72696174670.png",
};

type ColorName = "border" | "background";

export const colorPalette: Record<ColorName, string> = {
  border: "green",
  background: "black",
};

export function setUpUI() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const headerTitle = document.getElementById("empty");
  headerTitle?.appendChild(canvas);

  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  return context;
}
