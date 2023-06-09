import { GameState } from "./GameState";
import { EnterGameProps } from "../components/Types";
import { setUpUI } from "./helpers/drawingHelpers";

export function enterGamePlay(props: EnterGameProps, attract: boolean = false) {
  let gameState: GameState;
  let prevTime = 0;
  let initial = true;
  let paused = false;

  function update(elapsedTime: number) {
    gameState?.updateAll(elapsedTime, paused, {
      handleWin,
      toggleModal,
      incrementScore,
      playerDeath,
    });
  }

  function render() {
    gameState?.drawAll();
  }

  function gameLoop(timeStamp: number) {
    const elapsedTime = initial ? 0 : timeStamp - prevTime;
    initial = false;
    prevTime = timeStamp;

    update(elapsedTime);
    render();

    requestAnimationFrame(gameLoop);
  }

  function handleWin() {
    paused = true;
    props.onWin();
  }
  function toggleModal() {
    paused = !paused;
    props.toggleModal();
  }
  function incrementScore(score: number) {
    props.addScore(score);
  }
  function playerDeath() {
    props.decrementLife();
  }

  const context = setUpUI(attract);
  gameState = new GameState(context, attract);
  requestAnimationFrame(gameLoop);
}
