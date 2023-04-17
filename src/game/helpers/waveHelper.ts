import { Coordinates, OpponentType } from "./types";

export class trail{
    startPos: Coordinates;
    paths: Coordinates[][];
    opponentSequence: OpponentType[];
    speed: number;

    constructor(
        startPos: Coordinates,
        paths: Coordinates[][],
        opponentSequence: OpponentType[],
        speed = 400 / 1000,
    ){
        this.startPos = startPos;
        this.opponentSequence = opponentSequence;
        this.paths = paths;
        this.speed = speed;
    }
}