import { Coordinates, OpponentType } from "./types";

export class trail{
    startPos: Coordinates;
    paths: Coordinates[][];
    opponentSequence: OpponentType[];

    constructor(
        startPos: Coordinates,
        paths: Coordinates[][],
        opponentSequence: OpponentType[],
    ){
        this.startPos = startPos;
        this.opponentSequence = opponentSequence;
        this.paths = paths;
    }
}