import {
  CANVAS_BORDER,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  initialKeyStatus,
} from "./helpers/constants";
import { addEventListeners } from "./helpers/utils";
import { Player } from "./Player";
import { GameStateStatus, Keys } from "./helpers/types";
import { colorPalette } from "./helpers/drawingHelpers";
import { UpdateUiFunctions } from "../components/Types";
import { OpponentManager } from "./opponents/OpponentManager";
import { PlayerBulletManager } from "./bullets/PlayerBulletManager";
import { OpponentBulletManager } from "./bullets/OpponentBulletManager";
import { WaveManager } from "./waves/WaveManager";
import { ParticleManager } from "./particles/ParticleManager";
import { displayWords, drawBackground } from "../utils/images";

export class GameState {
  private keys: Keys = initialKeyStatus;
  private player: Player;
  private playerBulletManager: PlayerBulletManager;
  private opponentBulletManager: OpponentBulletManager;
  private opponentManager: OpponentManager;
  private waveManager: WaveManager;
  private particleManager: ParticleManager;
  private context: CanvasRenderingContext2D;
  private state: GameStateStatus = { status: "playing" };

  constructor(context: CanvasRenderingContext2D, attract: boolean) {
    if (!attract) addEventListeners(this.keys);

    this.player = new Player(context, attract);
    this.playerBulletManager = new PlayerBulletManager(context, attract);
    this.opponentBulletManager = new OpponentBulletManager(context);
    this.opponentManager = new OpponentManager(
      context,
      this.opponentBulletManager,
      this.player
    );
    this.waveManager = new WaveManager(
      this.opponentManager,
      this.opponentBulletManager
    );
    this.particleManager = new ParticleManager(context);
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

    this.playerBulletManager.update(
      elapsedTime,
      this.keys,
      this.player.centerX
    );
    this.opponentManager.update(elapsedTime);
    this.waveManager.update(elapsedTime);
    this.particleManager.update(elapsedTime);

    if (this.state.status === "gameOver") {
      this.state.deathTimer += elapsedTime;
      if (this.state.deathTimer > 5000) {
        this.state = { status: "done" };
        uiFunctions.handleWin();
      }
      return;
    }

    const opponentsHit = this.playerBulletManager.checkOpponentCollision(
      this.opponentManager.opponents
    );
    if (opponentsHit.length > 0) {
      opponentsHit.forEach((opp) => {
        uiFunctions.incrementScore(opp.score);
        this.particleManager.opponentDeath(opp);
        this.opponentManager.handleHit(opp);
      });
    }
    const playerHitByBullet = this.opponentBulletManager.checkPlayerCollision(
      this.player.centerX
    );
    const playerHitByOpponent = this.opponentManager.checkPlayerCollision(
      this.player.centerX
    );
    const justDied = playerHitByBullet || playerHitByOpponent;

    this.updatePlayer(justDied, elapsedTime);
  }

  drawAll() {
    drawBackground(this.context);
    this.player.draw();
    this.playerBulletManager.draw();
    this.opponentBulletManager.draw();
    this.opponentManager.draw();
    this.particleManager.draw();

    if (this.state.status === "gameOver") {
      displayWords("Game Over", this.context);
    }
    if (this.waveManager.displayStageNumber) {
      displayWords(`Stage ${this.waveManager.stageIndex + 1}`, this.context);
    }
  }

  updatePlayer(justDied: boolean, elapsedTime: number) {
    if (justDied) {
      this.particleManager.playerDeath(this.player.centerX!);
      if (this.player.endGame) {
        this.setGameStatusState("gameOver");
      }
    }
    this.player.update(this.keys, elapsedTime, justDied);
  }

  setGameStatusState(status: "playing" | "gameOver" | "done") {
    if (status === "gameOver") {
      this.state = { status: "gameOver", deathTimer: 0 };
      return;
    }
    this.state = { status };
  }
}
