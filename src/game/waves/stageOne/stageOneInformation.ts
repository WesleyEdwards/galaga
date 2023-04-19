import { Coordinates } from "../../helpers/types";
import { waveOneInformation } from "./waveOneInfo";
import { waveTwoInformation } from "./waveTwoInfo";

type OpponentPathInfo = {
  start: Coordinates;
  end: Coordinates[];
  paths: Coordinates[][];
};

export type WaveInfo = {
  waveNumber: number;
  trailInfo: OpponentPathInfo[];
};

export const stageOne: WaveInfo[] = [waveOneInformation, waveTwoInformation];
