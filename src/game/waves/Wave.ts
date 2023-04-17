import { trail } from "../helpers/waveHelper";
import { entranceInterval } from "../helpers/constants";
import { OpponentManager } from "../opponents/OpponentManager";
import { Opponent } from "../opponents/Opponent";

export class wave {
    trails: trail[];
    timers: number[] = [];
    opponentIndex: number[] = [];
    opponentManager: OpponentManager;
    constructor(
        trails: trail[],
        opponentManager: OpponentManager,
    ){
        this.trails = trails;
        for (let i = 0; i < trails.length; i++) {
            this.timers.push(0);
            this.opponentIndex.push(0);
        }
        this.opponentManager = opponentManager;
    }

    update(elapsedTime: number){
        // i refers to the index of the specific line of enemies
        for (let i = 0; i < this.trails.length; i++) {
            this.timers[i] += elapsedTime;
            if(this.timers[i] > entranceInterval && this.opponentIndex[i] < this.trails[i].opponentSequence.length){
                console.log(this.trails[i].startPos);
                console.log(this.trails[i].opponentSequence[this.opponentIndex[i]]);
                console.log(this.trails[i].paths[this.opponentIndex[i]]);
                
                
                this.opponentManager.addOpponent(new Opponent(
                    this.opponentManager.context,
                    this.trails[i].startPos,
                    this.trails[i].opponentSequence[this.opponentIndex[i]],
                    this.trails[i].paths[this.opponentIndex[i]],
                ));

                this.timers[i] = 0;
                this.opponentIndex[i]++;
            }
        }
    }
}

