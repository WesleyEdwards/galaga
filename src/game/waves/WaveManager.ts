import { MAX_WAVES } from "../helpers/constants";
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
    waveFiveStageTwo,
} from "./AllWaves";
import { wave } from "./Wave";

export class WaveManager {
    currentWave: number;
    allWaves: wave[][];
    activeWaves: wave[] = [];
    stageIndex = 0;
    totalElapsedTime = 0;
    opponentManager: OpponentManager;
    constructor(
        opponentManager: OpponentManager,
    ){
        this.opponentManager = opponentManager;
        this.allWaves = generateWaves(opponentManager);
        this.currentWave = 0;
    }

    update(elapsedTime: number, nextWave: boolean){
        if (nextWave) {
            this.stageIndex++;
            if (this.stageIndex > MAX_WAVES - 1) this.stageIndex = 0;
            this.currentWave = 0;
            this.activeWaves = [];
            this.totalElapsedTime = 0;
        }
        this.totalElapsedTime += elapsedTime;
        
        for (let i = this.currentWave; i < this.allWaves.length; i++) {
            if (this.totalElapsedTime > this.allWaves[this.stageIndex][i].startTime) {
                this.activeWaves.push(this.allWaves[this.stageIndex][i]);
                this.currentWave++;
            }
        }

        for (let i = 0; i < this.activeWaves.length; i++) {
            this.activeWaves[i].update(elapsedTime);
        }
    }
}

function generateWaves(opponentManager: OpponentManager): wave[][]{
    const waveOne1 = new wave(waveOneStageOne(), opponentManager, 0);
    const waveTwo1 = new wave(waveTwoStageOne(), opponentManager, 2500);
    const waveThree1 = new wave(waveThreeStageOne(), opponentManager, 6000);
    const waveFour1 = new wave(waveFourStageOne(), opponentManager, 10_000);
    const waveFive1 = new wave(waveFiveStageOne(), opponentManager, 14_000);
    
    const waveOne2 = new wave(waveOneStageTwo(), opponentManager, 0);
    const waveTwo2 = new wave(waveTwoStageTwo(), opponentManager, 2500);
    const waveThree2 = new wave(waveThreeStageTwo(), opponentManager, 6000);
    const waveFour2 = new wave(waveFourStageTwo(), opponentManager, 10_000);
    const waveFive2 = new wave(waveFiveStageTwo(), opponentManager, 14_000);

    return [
        [
            waveOne1,
            waveTwo1,
            waveThree1,
            waveFour1,
            waveFive1,
        ],
        [
            waveOne2,
            waveTwo2,
            waveThree2,
            waveFour2,
            waveFive2,
        ],
    ];
}