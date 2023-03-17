import { initialKeyStatus, Keys, TIME_TO_WIN } from "./helpers/constants";
import { canvasBackground, canvasBoarder } from "./helpers/drawFunctions";
import { addEventListeners } from "./helpers/utils";
import { Stage } from "./gameObjects/stage";
import { Player } from "./gameObjects/Player";

export class GameState {
  private keys: Keys = initialKeyStatus;
  private stage: Stage = new Stage();
  private player: Player = new Player();
  private totalTime: number = 0;

  constructor() {
    addEventListeners(this.keys);
  }

  drawAll(context: CanvasRenderingContext2D) {
    canvasBackground(context);
    this.stage.drawStage(context);
    this.player.draw(context);
    canvasBoarder(context);
  }

  updateAll(elapsedTime: number, handleWin: (score: number) => void) {
    this.totalTime += elapsedTime;

    if (this.totalTime > TIME_TO_WIN) {
      handleWin(100);
    }

    const moveOptions = this.stage.moveOptions(this.player);

    this.player.update(this.keys, moveOptions);
    this.stage.update();
  }
}
