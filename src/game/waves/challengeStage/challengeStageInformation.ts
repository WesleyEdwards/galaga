import { trail } from "../../helpers/waveHelper";
import { waveFiveInfo } from "./waveFiveInfo";
import { waveFourInfo } from "./waveFourInfo";
import { waveOneInfo } from "./waveOneInfo";

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
    waveFour,
    waveFive,
  ];
  