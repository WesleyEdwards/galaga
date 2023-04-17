import { trail } from "../game/helpers/waveHelper";
import { entranceInterval } from "../game/helpers/constants";
import { OpponentManager } from "../game/opponents/OpponentManager";
import { Opponent } from "../game/opponents/Opponent";

export class wave {
    trails: trail[];
    timers: number[] = [];
    enemyCounts: number[] = [];
    opponentManager: OpponentManager;
    constructor(
        trails: trail[],
        opponentManager: OpponentManager,
    ){
        this.trails = trails;
        for (let i = 0; i < trails.length; i++) {
            this.timers.push(0);
            this.enemyCounts.push(0);
        }
        this.opponentManager = opponentManager;
    }

    update(elapsedTime: number){
        for (let i = 0; i < this.trails.length; i++) {
            this.timers[i] += elapsedTime;
            if(this.timers[i] > entranceInterval && this.enemyCounts[i] < this.trails[i].opponentSequence.length){
                this.opponentManager.opponents.push(new Opponent(
                    this.opponentManager.context,
                    this.trails[i].startPos,
                    this.trails[i].opponentSequence[this.enemyCounts[i]].endPos,
                    this.trails[i].opponentSequence[this.enemyCounts[i]].type
                ));
                this.timers[i] = 0;
                this.enemyCounts[i]++;
            }
        }
    }
}

