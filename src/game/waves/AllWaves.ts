import { trail } from "../helpers/waveHelper";
import { beePathsW5S1, beeStartW5S1 } from "./stageOne/waveFiveInfo";
import { beePathsW4S1, beeStartW4S1 } from "./stageOne/waveFourInfo";
import { beePathsW1S1, beeStartW1S1, butterflyStartW1S1, butterflyPathsW1S1 } from "./stageOne/waveOneInfo";
import { butterflyPathsW3S1, butterflyStartW3S1 } from "./stageOne/waveThreeInfo";
import { opponentPathsW2S1, opponentStartW2S1 } from "./stageOne/waveTwoInfo";

export function waveOneStageOne(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        beeStartW1S1,
        beePathsW1S1,
        ['bee', 'bee', 'bee', 'bee']        
    ));
    trails.push(new trail(
        butterflyStartW1S1,
        butterflyPathsW1S1,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly']
    ));
    return trails;
}

export function waveTwoStageOne(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        opponentStartW2S1,
        opponentPathsW2S1(),
        ['bossGalaga', 'butterfly', 'bossGalaga', 'butterfly', 'bossGalaga', 'butterfly', 'bossGalaga', 'butterfly']
    ));
    return trails;
}

export function waveThreeStageOne() {
    const trails: trail[] = [];
    trails.push(new trail(
        butterflyStartW3S1,
        butterflyPathsW3S1,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly', 'butterfly', 'butterfly', 'butterfly', 'butterfly']
    ));
    return trails;
}

export function waveFourStageOne() {
    const trails: trail[] = [];
    trails.push(new trail(
        beeStartW4S1,
        beePathsW4S1,
        ['bee', 'bee', 'bee', 'bee', 'bee', 'bee', 'bee', 'bee']
    ));
    return trails;
}

export function waveFiveStageOne() {
    const trails: trail[] = [];
    trails.push(new trail(
        beeStartW5S1,
        beePathsW5S1,
        ['bee', 'bee', 'bee', 'bee', 'bee', 'bee', 'bee', 'bee']
    ));
    return trails;
}