import { Cell, createCells } from "./cell";

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

  get getSize() {
    return this.cells.length;
  }
}
