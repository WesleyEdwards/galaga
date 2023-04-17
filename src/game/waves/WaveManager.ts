import { OpponentManager } from "../opponents/OpponentManager";
import { 
    waveOneStageOne,
    waveTwoStageOne,
    waveThreeStageOne,
    waveFourStageOne,
    waveFiveStageOne,
} from "./AllWaves";
import { wave } from "./Wave";

export class WaveManager {
    currentWave: number;
    allWaves: wave[];
    activeWaves: wave[] = [];
    totalElapsedTime = 0;
    constructor(
        opponentManager: OpponentManager,
    ){
        this.allWaves = generateWaves(opponentManager);
        this.currentWave = 0;
    }

    update(elapsedTime: number){
        this.totalElapsedTime += elapsedTime;
        console.log(this.totalElapsedTime);
        
        for (let i = this.currentWave; i < this.allWaves.length; i++) {
            if (this.totalElapsedTime > this.allWaves[i].startTime) {
                this.activeWaves.push(this.allWaves[i]);
                this.currentWave++;
            }
        }

        for (let i = 0; i < this.activeWaves.length; i++) {
            this.activeWaves[i].update(elapsedTime);
        }
    }
}

function generateWaves(opponentManager: OpponentManager): wave[]{
    const waveOne = new wave(waveOneStageOne(), opponentManager, 0);
    const waveTwo = new wave(waveTwoStageOne(), opponentManager, 2500);
    const waveThree = new wave(waveThreeStageOne(), opponentManager, 6000);
    const waveFour = new wave(waveFourStageOne(), opponentManager, 10_000);
    const waveFive = new wave(waveFiveStageOne(), opponentManager, 14_000);
    return [
        waveOne,
        waveTwo,
        waveThree,
        waveFour,
        waveFive,
    ];
}