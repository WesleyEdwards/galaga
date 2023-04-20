import { trail } from "../helpers/waveHelper";
import { entranceInterval } from "../helpers/constants";
import { OpponentManager } from "../opponents/OpponentManager";
import { Opponent } from "../opponents/Opponent";

export class wave {
    trails: trail[];
    timers: number[] = [];
    opponentIndex: number[] = [];
    readyToFire: boolean[] = [];
    private opponents: Opponent[][] = [];
    opponentManager: OpponentManager;
    startTime: number;
    constructor(
        trails: trail[],
        opponentManager: OpponentManager,
        startTime: number
    ){
        this.trails = trails;
        for (let i = 0; i < trails.length; i++) {
            this.timers.push(0);
            this.opponentIndex.push(0);
            this.readyToFire.push(false);
            this.opponents.push([]);
        }
        this.opponentManager = opponentManager;
        this.startTime = startTime;
    }

    update(elapsedTime: number){
        // i refers to the index of the specific line of enemies
        for (let i = 0; i < this.trails.length; i++) {
            this.timers[i] += elapsedTime;
            //Kickstart the wave by immediately adding an enemy
            if (this.opponentIndex[i] == 0) this.timers[i] = entranceInterval;
            if(this.timers[i] >= entranceInterval && this.opponentIndex[i] < this.trails[i].opponentSequence.length){
                const opp = new Opponent(
                    this.opponentManager.context,
                    this.trails[i].startPos,
                    this.trails[i].opponentSequence[this.opponentIndex[i]],
                    this.trails[i].paths[this.opponentIndex[i]],
                    this.trails[i].speed,
                );
                this.opponentManager.addOpponent(opp);
                this.opponents[i].push(opp);
                this.timers[i] = 0;
                this.opponentIndex[i]++;
                if (this.trails[i].opponentSequence.length == this.opponentIndex[i]) {
                    this.readyToFire[i] = true;
                }
            }

        }
    }

    getAttackers() {
        const attackers = [];
        for (let i = 0; i < this.trails.length; i++) {
            if (this.readyToFire[i]) {
                attackers.push(this.opponents[i][0]);
                attackers.push(this.opponents[i][2]);
                this.readyToFire[i] = false;
            }
        }
        return attackers;
    }
}

