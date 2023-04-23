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
      "bee",
      "bee",
      "bee",
      "bee",
    ]),
  ];


const waveTwo: trail[] = [
    new trail(waveTwoInfo[0].start, waveTwoInfo[0].paths, [
        "bossGalaga",
        "bee",
        "bossGalaga",
        "bee",
        "bossGalaga",
        "bee",
        "bossGalaga",
        "bee",
    ]),
];

const waveThree: trail[] = [
    new trail(waveThreeInfo[0].start, waveThreeInfo[0].paths, [
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee"
    ]),
];

const waveFour: trail[] = [
    new trail(waveFourInfo[0].start, waveFourInfo[0].paths, [
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee"
    ]),
];

const waveFive: trail[] = [
    new trail(waveFiveInfo[0].start, waveFiveInfo[0].paths, [
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee",
        "bee"
    ]),
];

  export const stageThreeTrailInfo: trail[][] = [
    waveOne,
    waveTwo,
    waveThree,
    waveFour,
    waveFive,
  ];
  