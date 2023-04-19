import {
  CANVAS_BORDER,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  initialKeyStatus,
} from "./helpers/constants";
import { addEventListeners } from "./helpers/utils";
import { Player } from "./Player";
import { Keys } from "./helpers/types";
import { colorPalette } from "./helpers/drawingHelpers";
import { UpdateUiFunctions } from "../components/Types";
import { OpponentManager } from "./opponents/OpponentManager";
import { PlayerBulletManager } from "./bullets/PlayerBulletManager";
import { OpponentBulletManager } from "./bullets/OpponentBulletManager";
import { WaveManager } from "./waves/WaveManager";

export class GameState {
  private keys: Keys = initialKeyStatus;
  private player: Player;
  private playerBulletManager: PlayerBulletManager;
  private opponentBulletManager: OpponentBulletManager;
  private opponentManager: OpponentManager;
  private waveManager: WaveManager;
  private context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    addEventListeners(this.keys);
    this.player = new Player(context);
    this.playerBulletManager = new PlayerBulletManager(context);
    this.opponentBulletManager = new OpponentBulletManager(context);
    this.opponentManager = new OpponentManager(context);
    this.waveManager = new WaveManager(this.opponentManager, this.opponentBulletManager);
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
    this.playerBulletManager.update(elapsedTime, this.keys, this.player.centerX);
    this.opponentManager.update(elapsedTime);
    this.waveManager.update(elapsedTime);

    const opponentsHit = this.playerBulletManager.checkOpponentCollision(
      this.opponentManager.opponents
    );
    if (opponentsHit.length > 0) {
      uiFunctions.incrementScore(opponentsHit.length);
      for (let i = 0; i < opponentsHit.length; i++) {
        let index = this.opponentManager.opponents.indexOf(opponentsHit[i]);
        this.opponentManager.handleHit(index);
      }
    }
    const playerHit = this.opponentBulletManager.checkPlayerCollision(this.player);
    if (playerHit) {
      this.player.handleHit();
    }
  }

  drawAll() {
    this.drawBackground();
    this.player.draw();
    this.playerBulletManager.draw();
    this.opponentManager.draw();
  }

  drawBackground() {
    this.context.fillStyle = colorPalette.background;
    this.context.strokeStyle = colorPalette.border;
    this.context.lineWidth = CANVAS_BORDER;
    this.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
