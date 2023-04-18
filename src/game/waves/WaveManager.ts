import { OpponentManager } from "../opponents/OpponentManager";
import { 
    waveOneStageOne,
    waveTwoStageOne,
    waveThreeStageOne,
    waveFourStageOne,
    waveFiveStageOne,
    waveOneStageTwo,
    waveTwoStageTwo,
    waveThreeStageTwo,
    waveFourStageTwo,
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
    const waveOne1 = new wave(waveOneStageOne(), opponentManager, 0);
    const waveTwo1 = new wave(waveTwoStageOne(), opponentManager, 2500);
    const waveThree1 = new wave(waveThreeStageOne(), opponentManager, 6000);
    const waveFour1 = new wave(waveFourStageOne(), opponentManager, 10_000);
    const waveFive1 = new wave(waveFiveStageOne(), opponentManager, 14_000);
    
    const waveOne2 = new wave(waveOneStageTwo(), opponentManager, 0);
    const waveTwo2 = new wave(waveTwoStageTwo(), opponentManager, 2500);
    const waveThree2 = new wave(waveThreeStageTwo(), opponentManager, 6000);
    const waveFour2 = new wave(waveFourStageTwo(), opponentManager, 0);
    return [
        // waveOne1,
        // waveTwo1,
        // waveThree1,
        // waveFour1,
        // waveFive1,
        // waveOne2,
        // waveTwo2,
        // waveThree2,
        waveFour2,
    ];
}