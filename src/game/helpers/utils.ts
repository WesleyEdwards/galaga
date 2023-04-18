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
  window.addEventListener("keydown", (e) => {
    if (e.key === parsedControlScheme.right || (parsedControlScheme.right === "Space" && e.key === " ")) keys.right = true;
    if (e.key === parsedControlScheme.left || (parsedControlScheme.left === "Space" && e.key === " ")) keys.left = true;
    if (!e.repeat && (e.key === parsedControlScheme.shoot || (parsedControlScheme.shoot === "Space" && e.key === " "))) keys.shoot = true;
    if (e.key === "Escape") keys.escape = true;
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === parsedControlScheme.right || (parsedControlScheme.right === "Space" && e.key === " ")) keys.right = false;
    if (e.key === parsedControlScheme.left || (parsedControlScheme.left === "Space" && e.key === " ")) keys.left = false;
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
