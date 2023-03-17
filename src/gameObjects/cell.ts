import {
  CANVAS_WIDTH,
  colorPalette,
  GRID_HEIGHT,
  GRID_WIDTH,
} from "../helpers/constants";

export class Cell {
  col: number;
  row: number;
  width: number;

  constructor(col: number, row: number, width: number) {
    this.col = col;
    this.row = row;
    this.width = width;
  }

  drawCell(context: CanvasRenderingContext2D): void {
    context.strokeStyle = colorPalette.walls;

    const lineWidth = this.width / 10;
    const additional = lineWidth / 2;
    context.lineWidth = lineWidth;
    const rowValue = this.row * this.width;
    const colValue = this.col * this.width;

    context.beginPath();
    context.moveTo(rowValue + this.width, colValue - additional);
    context.lineTo(rowValue + this.width, colValue + this.width + additional);
    context.stroke();

    context.beginPath();
    context.moveTo(rowValue - additional, colValue + this.width);
    context.lineTo(rowValue + this.width + additional, colValue + this.width);
    context.stroke();
  }
}

export function createCells(): Cell[][] {
  const cellWidth = CANVAS_WIDTH / GRID_WIDTH;

  const cells: Cell[][] = [];
  for (let i = 0; i < GRID_HEIGHT; i++) {
    cells[i] = [];
    for (let j = 0; j < GRID_WIDTH; j++) {
      cells[i][j] = new Cell(i, j, cellWidth);
    }
  }
  return cells;
}
