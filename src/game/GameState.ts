import {
  CANVAS_BORDER,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  initialKeyStatus,
} from "./helpers/constants";
import { addEventListeners } from "./helpers/utils";
import { Player } from "./gameObjects/Player";
import { BulletManager } from "./gameObjects/BulletManager";
import { Keys } from "./helpers/types";
import { colorPalette } from "./helpers/drawingHelpers";
import { UpdateUiFunctions } from "../components/Types";

export class GameState {
  private keys: Keys = initialKeyStatus;
  private player: Player;
  private bulletManager: BulletManager;
  private context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    addEventListeners(this.keys);
    this.player = new Player(context);
    this.bulletManager = new BulletManager(context);
    this.context = context;
  }

  updateAll(
    elapsedTime: number,
    paused: boolean,
    uiFunctions: UpdateUiFunctions
  ) {
    if (this.keys.escape) {
      uiFunctions.toggleModal();
      this.keys.escape = false;
    }
    if (paused) return;

    this.player.update(this.keys, elapsedTime);
    this.bulletManager.update(elapsedTime, this.keys, this.player.centerX);

    // if (Math.random() < 0.001) {
    //   uiFunctions.handleWin();
    // }
  }

  drawAll() {
    this.drawBackground();
    this.player.draw();
    this.bulletManager.draw();
  }

  drawBackground() {
    this.context.fillStyle = colorPalette.background;
    this.context.strokeStyle = colorPalette.border;
    this.context.lineWidth = CANVAS_BORDER;
    this.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
