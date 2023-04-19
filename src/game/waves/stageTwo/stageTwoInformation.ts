import { trail } from "../../helpers/waveHelper";
import { waveFiveInfo } from "./waveFive";
import { waveFourInfo } from "./waveFourInfo";
import { waveOneInfo } from "./waveOneInfo";
import { waveThreeInfo } from "./waveThreeInfo";
import { waveTwoInfo } from "./waveTwoInfo";

const waveOne = [
  new trail(waveOneInfo[0].start, waveOneInfo[0].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
  new trail(waveOneInfo[0].start, waveOneInfo[0].paths, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
];

const waveTwo = [
  new trail(waveTwoInfo[0].start, waveTwoInfo[0].paths, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
  new trail(
    waveTwoInfo[1].start,
    waveTwoInfo[1].paths,
    ["bossGalaga", "bossGalaga", "bossGalaga", "bossGalaga"],
    485 / 1000
  ),
];

const waveThree = [
  new trail(
    waveThreeInfo[0].start,
    waveThreeInfo[0].paths,
    ["butterfly", "butterfly", "butterfly", "butterfly"]
  ),
  new trail(
    waveThreeInfo[1].start,
    waveThreeInfo[1].paths,
    ["butterfly", "butterfly", "butterfly", "butterfly"],
    485 / 1000
  ),
];

const waveFour = [
  new trail(waveFourInfo[0].start, waveFourInfo[0].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
  new trail(waveFourInfo[1].start, waveFourInfo[1].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
];

const waveFive = [
  new trail(waveFiveInfo[0].start, waveFiveInfo[0].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
  new trail(waveFiveInfo[1].start, waveFiveInfo[1].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
];

export const stageTwoTrailInfo: trail[][] = [
  waveOne,
  waveTwo,
  waveThree,
  waveFour,
  waveFive,
];
