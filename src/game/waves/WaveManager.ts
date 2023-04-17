import { OpponentManager } from "../opponents/OpponentManager";
import { waveOneStageOne } from "./AllWaves";
import { wave } from "./Wave";

export class WaveManager {
    currentWave: number;
    waves: wave[];
    constructor(
        opponentManager: OpponentManager,
    ){
        this.waves = generateWaves(opponentManager);
        this.currentWave = 0;
    }

    update(elapsedTime: number){
        this.waves[this.currentWave].update(elapsedTime);
    }
}

function generateWaves(opponentManager: OpponentManager): wave[]{
    const waveOne = new wave(waveOneStageOne(), opponentManager);
    return [waveOne];
}