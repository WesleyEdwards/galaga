import "./dom/style.css";
import { getCanvasContext, setupCanvas } from "./dom/domHelpers";
import { GameState } from "./GameState";
import { handleWinUi } from "./dom/winScreen";
import { initializeGameUi } from "./dom/menu";

function main() {
  let gameState: GameState | undefined;
  let prevTime = 0;
  let initial = true;

  const { canvas, context } = getCanvasContext();

  function update(elapsedTime: number) {
    gameState?.updateAll(elapsedTime, handleWin);
  }

  function render() {
    gameState?.drawAll(context);
  }

  function gameLoop(timeStamp: number) {
    const elapsedTime = initial ? 0 : timeStamp - prevTime;
    initial = false;
    prevTime = timeStamp;

    update(elapsedTime);
    render();

    requestAnimationFrame(gameLoop);
  }

  function handleWin(score: number) {
    prevTime = 0;
    gameState = undefined;
    handleWinUi(score, () => initializeGameUi(startGame));
  }

  function startGame() {
    setupCanvas(canvas, startOver);
    initial = true;
    gameState = new GameState();
    requestAnimationFrame(gameLoop);
  }

  function startOver() {
    prevTime = 0;
    gameState = undefined;
    initializeGameUi(startGame);
  }

  initializeGameUi(startGame);
}

onload = () => main();
