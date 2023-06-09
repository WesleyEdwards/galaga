export type Keys = {
  left: boolean;
  right: boolean;
  escape: boolean;
  shoot: boolean;
};

export type Direction = "left" | "right" | "none";

export type Coordinates = {
  x: number;
  y: number;
};

export type SpriteInfo = {
  srcX: number;
  srcY: number;
  srcWidth: number;
  srcHeight: number;
};

export type OpponentType = "bee" | "butterfly" | "bossGalaga";

export type Path = Coordinates[];

export type OpponentState = "entrance" | "stationary" | "breathe-in" | "breathe-out" | "attack";


export type GameStateStatus =
  | { status: "playing" }
  | { status: "gameOver"; deathTimer: number }
  | { status: "done" };