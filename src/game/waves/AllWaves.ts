import { trail } from "../helpers/waveHelper";
import { beePathsW5S1, beeStartW5S1 } from "./stageOne/waveFiveInfo";
import { beePathsW4S1, beeStartW4S1 } from "./stageOne/waveFourInfo";
import {
  butterflyPathsW3S1,
  butterflyStartW3S1,
} from "./stageOne/waveThreeInfo";
import {
  beePathsW1S2,
  beeStartW1S2,
  butterflyPathsW1S2,
  butterflyStartW1S2,
} from "./stageTwo/waveOneInfo";
import {
  innerButterflyPathsW3S2,
  innerButterflyStartW3S2,
  outerButterflyPathsW3S2,
  outerButterflyStartW3S2,
} from "./stageTwo/waveThreeInfo";
import {
  bossGalagaPathsW2S2,
  bossGalagaStartW2S2,
  butterflyPathsW2S2,
  butterflyStartW2S2,
} from "./stageTwo/waveTwoInfo";
import {
  innerBeePathsW4S2,
  innerBeeStartW4S2,
  outerBeePathsW4S2,
  outerBeeStartW4S2,
} from "./stageTwo/waveFourInfo";
import {
  innerBeePathsW5S2,
  innerBeeStartW5S2,
  outerBeePathsW5S2,
  outerBeeStartW5S2,
} from "./stageTwo/waveFive";
import { stageOne } from "./stageOne/stageOneInformation";

const waveOneInfo = stageOne[0];
const waveTwoInfo = stageOne[1];
export const waveOneStageOne: trail[] = [
  new trail(waveOneInfo.trailInfo[0].start, waveOneInfo.trailInfo[0].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
  new trail(waveOneInfo.trailInfo[1].start, waveOneInfo.trailInfo[1].paths, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
];

export const waveTwoStageOne = [
  new trail(waveTwoInfo.trailInfo[0].start, waveTwoInfo.trailInfo[0].paths, [
    "bossGalaga",
    "butterfly",
    "bossGalaga",
    "butterfly",
    "bossGalaga",
    "butterfly",
    "bossGalaga",
    "butterfly",
  ]),
];

export const waveThreeStageOne = [
  new trail(butterflyStartW3S1, butterflyPathsW3S1, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
];

export const waveFourStageOne = [
  new trail(beeStartW4S1, beePathsW4S1, [
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
];

export const waveFiveStageOne = [
  new trail(beeStartW5S1, beePathsW5S1, [
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
];

export const waveOneStageTwo = [
  new trail(beeStartW1S2, beePathsW1S2, ["bee", "bee", "bee", "bee"]),
  new trail(butterflyStartW1S2, butterflyPathsW1S2, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
];

export const waveTwoStageTwo = [
  new trail(butterflyStartW2S2, butterflyPathsW2S2, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
  new trail(
    bossGalagaStartW2S2,
    bossGalagaPathsW2S2,
    ["bossGalaga", "bossGalaga", "bossGalaga", "bossGalaga"],
    485 / 1000
  ),
];

export const waveThreeStageTwo = [
  new trail(innerButterflyStartW3S2, innerButterflyPathsW3S2, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
  new trail(
    outerButterflyStartW3S2,
    outerButterflyPathsW3S2,
    ["butterfly", "butterfly", "butterfly", "butterfly"],
    485 / 1000
  ),
];

export const waveFourStageTwo = [
  new trail(innerBeeStartW4S2, innerBeePathsW4S2, ["bee", "bee", "bee", "bee"]),
  new trail(outerBeeStartW4S2, outerBeePathsW4S2, ["bee", "bee", "bee", "bee"]),
];

export const waveFiveStageTwo = [
  new trail(innerBeeStartW5S2, innerBeePathsW5S2, ["bee", "bee", "bee", "bee"]),
  new trail(outerBeeStartW5S2, outerBeePathsW5S2, ["bee", "bee", "bee", "bee"]),
];
