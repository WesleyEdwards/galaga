import { Keys } from "./constants";

export function addEventListeners(keys: Keys) {
  window.addEventListener("keydown", ({ key: k }) => {
    if (k === "ArrowRight") keys.direction = "right";
    if (k === "ArrowLeft") keys.direction = "left";
    if (k === " " || k === "Escape") keys.escape = true;
  });

  window.addEventListener("keyup", ({ key: k }) => {
    if (k === "ArrowRight") keys.direction = "none";
    if (k === "ArrowLeft") keys.direction = "none";
  });
}

export function debounceLog(val: any) {
  if (generateRandomInt(0, 100) === 1) {
    console.log(val);
  }
}

export function generateRandomInt(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}
