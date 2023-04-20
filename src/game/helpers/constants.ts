import { Keys } from "./types";

export const initialKeyStatus: Keys = {
  left: false,
  right: false,
  escape: false,
  shoot: false,
};

export const PIXEL_SCALE_FACTOR = 57.6;

export const TIME_TO_WIN = 7000;

// Canvas
export const CANVAS_WIDTH = 576;
export const CANVAS_HEIGHT = 576;
export const CANVAS_BORDER = 10;

export const PLAYER_MOST_LEFT_POS = CANVAS_BORDER;
export const PLAYER_MOST_RIGHT_POS = CANVAS_WIDTH - CANVAS_BORDER;

// Player
export const PLAYER_SPEED = 0.3;
export const PLAYER_WIDTH = 32;
export const PLAYER_TOP = PLAYER_WIDTH * 1.5;
export const PLAYER_BOTTOM = PLAYER_TOP - PLAYER_WIDTH;

// Bullet
export const BULLET_SPEED = 0.6;
export const BULLET_WIDTH = 3;
export const BULLET_HEIGHT = 16;

export const OPPONENT_WIDTH = 32;
export const OPPONENT_HEIGHT = 32;


export const entranceInterval = 100

export const MAX_WAVES = 2;