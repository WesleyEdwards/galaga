import { Coordinates, OpponentType } from "./types";

export class trail{
    startPos: { x: number; y: number };
    path: { x: number; y: number }[];
    opponentSequence: {type: OpponentType, endPos: Coordinates}[];

    constructor(
        startPos: { x: number; y: number },
        opponentSequence: {type: OpponentType, endPos: Coordinates}[],
        path: { x: number; y: number }[]
    ){
        this.startPos = startPos;
        this.opponentSequence = opponentSequence;
        this.path = path;
    }
}