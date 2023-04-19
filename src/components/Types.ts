export type GameInfo = {
  lives: number;
  score: number;
};

export const initGameInfo: GameInfo = {
  lives: 3,
  score: 0,
};

export type ScreenProps = {
  onBack: (page: Page) => void;
  score?: number;
};

export type MenuButton = {
  text: string;
  onClick: () => void;
};

export type Page =
  | "menu"
  | "newGame"
  | "highScores"
  | "help"
  | "about"
  | "lose"
  | "settings"
  | "win";

export type EnterGameProps = {
  decrementLife: () => void;
  addScore: (score: number) => void;
  onWin: () => void;
  toggleModal: () => void;
  bgImage: HTMLImageElement;
};

export type UpdateUiFunctions = {
  handleWin: () => void;
  toggleModal: () => void;
  incrementScore: (score: number) => void;
};
