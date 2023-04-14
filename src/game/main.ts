import { GameState } from "./GameState";
import { EnterGameProps } from "../components/Types";
import { setUpUI } from "./helpers/drawingHelpers";

export function enterGamePlay(props: EnterGameProps) {
  let gameState: GameState;
  let prevTime = 0;
  let initial = true;
  let paused = false;
  console.log(import.meta.env.VITE_RED_OUTLINE);

  function update(elapsedTime: number) {
    gameState?.updateAll(elapsedTime, paused, {
      handleWin,
      toggleModal,
      incrementScore,
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

  const context = setUpUI();
  gameState = new GameState(context);
  requestAnimationFrame(gameLoop);
}
