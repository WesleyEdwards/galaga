import { Keys } from "./types";

export function addEventListeners(keys: Keys) {
  const defaultControlScheme = {
    left: "ArrowLeft",
    right: "ArrowRight",
    shoot: "Space",
  };
  const controlScheme = localStorage.getItem("controlScheme");
  let parsedControlScheme = defaultControlScheme;
  if (controlScheme) {
    parsedControlScheme = JSON.parse(controlScheme);
  } else {
    localStorage.setItem("controlScheme", JSON.stringify(defaultControlScheme));
  }
  window.addEventListener("keydown", ({ key }) => {
    if (key === parsedControlScheme.right || (parsedControlScheme.right === "Space" && key === " ")) keys.right = true;
    if (key === parsedControlScheme.left || (parsedControlScheme.left === "Space" && key === " ")) keys.left = true;
    if (key === parsedControlScheme.shoot || (parsedControlScheme.shoot === "Space" && key === " ")) keys.shoot = true;
    if (key === "Escape") keys.escape = true;
  });

  window.addEventListener("keyup", ({ key }) => {
    if (key === parsedControlScheme.right || (parsedControlScheme.right === "Space" && key === " ")) keys.right = false;
    if (key === parsedControlScheme.left || (parsedControlScheme.left === "Space" && key === " ")) keys.left = false;
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
