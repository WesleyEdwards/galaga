import { Coordinates } from "../helpers/types";
import { OpponentManager } from "../opponents/OpponentManager";
import { wave } from "./Wave";
import { stageOneTrailInfo } from "./stageOne/stageOneInformation";
import { stageTwoTrailInfo } from "./stageTwo/stageTwoInformation";

type OpponentPathInfo = {
  start: Coordinates;
  end: Coordinates[];
  paths: Coordinates[][];
};

export type WaveInfo = OpponentPathInfo[];

export function generateWaves(
  opponentManager: OpponentManager,
  index: number
): wave[] {
  const waveOne1 = new wave(stageOneTrailInfo[0], opponentManager, 2_000);
  const waveTwo1 = new wave(stageOneTrailInfo[1], opponentManager, 4_500);
  const waveThree1 = new wave(stageOneTrailInfo[2], opponentManager, 8_000);
  const waveFour1 = new wave(stageOneTrailInfo[3], opponentManager, 12_000);
  const waveFive1 = new wave(stageOneTrailInfo[4], opponentManager, 16_000);

  const waveOne2 = new wave(stageTwoTrailInfo[0], opponentManager, 2_000);
  const waveTwo2 = new wave(stageTwoTrailInfo[1], opponentManager, 4_500);
  const waveThree2 = new wave(stageTwoTrailInfo[2], opponentManager, 8_000);
  const waveFour2 = new wave(stageTwoTrailInfo[3], opponentManager, 12_000);
  const waveFive2 = new wave(stageTwoTrailInfo[4], opponentManager, 16_000);


  const wavesByStage = [
    [waveOne1, waveTwo1, waveThree1, waveFour1, waveFive1],
    [waveOne2, waveTwo2, waveThree2, waveFour2, waveFive2],
  ];

  return wavesByStage[index];
}
