import { trail } from "../../helpers/waveHelper";
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


  export const stageThreeTrailInfo: trail[][] = [
    waveOne,
  ];
  