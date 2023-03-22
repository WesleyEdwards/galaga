import { Keys } from "./types";

export function addEventListeners(keys: Keys) {
  window.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowRight") keys.right = true;
    if (key === "ArrowLeft") keys.left = true;
    if (key === " ") keys.shoot = true;
    if (key === " " || key === "Escape") keys.escape = true;
  });

  window.addEventListener("keyup", ({ key }) => {
    if (key === "ArrowRight") keys.right = false;
    if (key === "ArrowLeft") keys.left = false;
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
