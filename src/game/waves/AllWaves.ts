import { trail } from "../helpers/waveHelper";
import { beePathsW1S1, beeStartW1S1, butterflyStartW1S1, butterflyPathsW1S1 } from "./stageOne/WaveOne/waveOneInfo";

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