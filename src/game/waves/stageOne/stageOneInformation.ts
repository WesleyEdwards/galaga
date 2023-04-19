import { Coordinates } from "../../helpers/types";
import { trail } from "../../helpers/waveHelper";
import { waveFiveInfo } from "./waveFiveInfo";
import { waveFourInfo } from "./waveFourInfo";
import { waveOneInfo } from "./waveOneInfo";
import { waveThreeInfo } from "./waveThreeInfo";
import { waveTwoInfo } from "./waveTwoInfo";

const waveOne: trail[] = [
  new trail(waveOneInfo[0].start, waveOneInfo[0].paths, [
    "bee",
    "bee",
    "bee",
    "bee",
  ]),
  new trail(waveOneInfo[1].start, waveOneInfo[1].paths, [
    "butterfly",
    "butterfly",
    "butterfly",
    "butterfly",
  ]),
];

const waveTwo = [
  new trail(waveTwoInfo[0].start, waveTwoInfo[0].paths, [
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

const waveThree = [
  new trail(
    waveThreeInfo[0].start,
    waveThreeInfo[0].paths,
    [
      "butterfly",
      "butterfly",
      "butterfly",
      "butterfly",
      "butterfly",
      "butterfly",
      "butterfly",
      "butterfly",
    ]
  ),
];

const waveFour = [
  new trail(waveFourInfo[0].start, waveFourInfo[0].paths, [
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

const waveFive = [
  new trail(waveFiveInfo[0].start, waveFiveInfo[0].paths, [
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

export const stageOneTrailInfo: trail[][] = [
  waveOne,
  waveTwo,
  waveThree,
  waveFour,
  waveFive,
];
