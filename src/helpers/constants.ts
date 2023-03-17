export const bgImageUrl =
  "https://user-images.githubusercontent.com/97990557/215391290-63ef6d4b-e936-487f-a10a-2e46aeb0516e.png";
export const tsImageUrl =
  "https://user-images.githubusercontent.com/97990557/218295025-10f67eb5-4cbc-454c-bdb4-1931f2d623b5.png";

export type Direction = "up" | "down" | "left" | "right" | "none";

export interface Coordinates {
  row: number;
  col: number;
}

export const widthFactor: Record<string, number> = {
  crumbs: 0.16,
  mainPath: 0.25,
  hint: 0.25,
};

type Colors = "walls" | "border";

export const colorPalette: Record<Colors, string> = {
  walls: "blue",
  border: "green",
} as const;

export const timerFont = "30px Arial";

export interface Keys {
  direction: Direction;
  escape: boolean;
}

export const initialKeyStatus: Keys = {
  direction: "none",
  escape: false,
};

export const PIXEL_SCALE_FACTOR = 57.6;

export const GRID_WIDTH = 15;
export const GRID_HEIGHT = 10;

export const TIME_TO_WIN = 7000;

export const STATS_BOX_TOP = PIXEL_SCALE_FACTOR * GRID_HEIGHT;

export const CANVAS_WIDTH = PIXEL_SCALE_FACTOR * GRID_WIDTH;
export const CANVAS_HEIGHT = PIXEL_SCALE_FACTOR * GRID_HEIGHT + 100;
