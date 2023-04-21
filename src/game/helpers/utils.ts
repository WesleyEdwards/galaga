import { BgParticle } from "../particles/BgParticle";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";
import { Keys, OpponentType } from "./types";

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

export const oppColors: Record<OpponentType, string[]> = {
  bee: ["#ffff00", "#0068de", "#ff0000"],
  butterfly: ["#ff0000", "#0068de", "#dedede"],
  bossGalaga: ["#0068de", "#9700de", "#ff00de"],
};

export const initialBgParticles: BgParticle[] = new Array(100)
  .fill(0)
  .map(() => {
    const x = generateRandomInt(0, CANVAS_WIDTH);
    const y = generateRandomInt(0, CANVAS_HEIGHT);
    return new BgParticle({ x, y }, "white");
  });


  export const emptyGameFunctions = {
    decrementLife: () => {},
    addScore: () => {},
    onWin: () => {},
    toggleModal: () => {},
  }