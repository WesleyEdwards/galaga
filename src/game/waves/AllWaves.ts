import { trail } from "../helpers/waveHelper";
import { beePathsW5S1, beeStartW5S1 } from "./stageOne/waveFiveInfo";
import { beePathsW4S1, beeStartW4S1 } from "./stageOne/waveFourInfo";
import { beePathsW1S1, beeStartW1S1, butterflyStartW1S1, butterflyPathsW1S1 } from "./stageOne/waveOneInfo";
import { butterflyPathsW3S1, butterflyStartW3S1 } from "./stageOne/waveThreeInfo";
import { opponentPathsW2S1, opponentStartW2S1 } from "./stageOne/waveTwoInfo";
import { beePathsW1S2, beeStartW1S2, butterflyPathsW1S2, butterflyStartW1S2 } from "./stageTwo/waveOneInfo";
import { innerButterflyPathsW3S2, innerButterflyStartW3S2, outerButterflyPathsW3S2, outerButterflyStartW3S2 } from "./stageTwo/waveThreeInfo";
import { bossGalagaPathsW2S2, bossGalagaStartW2S2, butterflyPathsW2S2, butterflyStartW2S2 } from "./stageTwo/waveTwoInfo";
import { innerBeePathsW4S2, innerBeeStartW4S2, outerBeePathsW4S2, outerBeeStartW4S2 } from "./stageTwo/waveFourInfo";

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

export function waveOneStageTwo(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        beeStartW1S2,
        beePathsW1S2,
        ['bee', 'bee', 'bee', 'bee']        
    ));
    trails.push(new trail(
        butterflyStartW1S2,
        butterflyPathsW1S2,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly']
    ));
    return trails;
}

export function waveTwoStageTwo(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        butterflyStartW2S2,
        butterflyPathsW2S2,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly'],
    ));
    trails.push(new trail(
        bossGalagaStartW2S2,
        bossGalagaPathsW2S2,
        ['bossGalaga', 'bossGalaga', 'bossGalaga', 'bossGalaga'],
        485 / 1000,
    ));
    return trails;
}

export function waveThreeStageTwo(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        innerButterflyStartW3S2,
        innerButterflyPathsW3S2,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly'],
    ));
    trails.push(new trail(
        outerButterflyStartW3S2,
        outerButterflyPathsW3S2,
        ['butterfly', 'butterfly', 'butterfly', 'butterfly'],
        485 / 1000,
    ));
    return trails;
}

export function waveFourStageTwo(): trail[] {
    const trails: trail[] = [];
    trails.push(new trail(
        innerBeeStartW4S2,
        innerBeePathsW4S2,
        ['bee', 'bee', 'bee', 'bee']
    ));
    trails.push(new trail(
        outerBeeStartW4S2,
        outerBeePathsW4S2,
        ['bee', 'bee', 'bee', 'bee']
    ));
    return trails;
}