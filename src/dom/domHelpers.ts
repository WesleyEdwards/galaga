import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../helpers/constants";

export function getCanvasContext(): {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
} {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  return { canvas, context };
}

export function setupCanvas(canvas: HTMLCanvasElement, startOver: () => void) {
  const mainDiv = document.getElementById("mainDiv")!;
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;

  const endButton = createButton("startOver", "Start Over", startOver);
  endButton.setAttribute("style", "margin-top: 2rem;");

  mainDiv.appendChild(canvas);
  mainDiv.appendChild(endButton);
}

export function createButton(id: string, text: string, callback: () => void) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.innerHTML = text;
  button.addEventListener("click", callback);
  return button;
}

export function setElementToApp(div?: HTMLDivElement) {
  const title = document.createElement("h1");
  title.setAttribute("class", "onBackground");
  title.innerHTML = "Big Blue is You";

  const mainDiv = createDiv("mainDiv");
  mainDiv.appendChild(title);
  mainDiv.appendChild(div ?? document.createElement("div"));

  const appDiv = document.getElementById("app") as HTMLDivElement;
  appDiv.innerHTML = "";
  appDiv.appendChild(mainDiv);
}

export function createDiv(id: string): HTMLDivElement {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  return div;
}
