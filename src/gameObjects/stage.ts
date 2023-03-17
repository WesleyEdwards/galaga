import { Cell, createCells } from "./cell";
import { Direction } from "../helpers/constants";
import { Player } from "./Player";

export class Stage {
  cells: Cell[][];

  constructor() {
    this.cells = createCells();
  }

  update() {
    return;
  }

  drawStage(context: CanvasRenderingContext2D) {
    this.cells.forEach((column) => {
      column.forEach((cell) => cell.drawCell(context));
    });
  }

  moveOptions(player: Player): Record<Direction, boolean> {
    // See if any walls are in the way
    return {
      right: true,
      left: true,
      up: true,
      down: true,
      none: true,
    };
  }

  get getSize() {
    return this.cells.length;
  }
}
