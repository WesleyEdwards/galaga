import { Coordinates } from "../helpers/types";
import { OpponentManager } from "../opponents/OpponentManager";
import { wave } from "./Wave";
import { stageOneTrailInfo } from "./stageOne/stageOneInformation";
import { stageTwoTrailInfo } from "./stageTwo/stageTwoInformation";
import { stageThreeTrailInfo } from "./challengeStage/challengeStageInformation";

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
  const waveOne1 = new wave(stageOneTrailInfo[0], opponentManager, 0);
  const waveTwo1 = new wave(stageOneTrailInfo[1], opponentManager, 2500);
  const waveThree1 = new wave(stageOneTrailInfo[2], opponentManager, 6000);
  const waveFour1 = new wave(stageOneTrailInfo[3], opponentManager, 10_000);
  const waveFive1 = new wave(stageOneTrailInfo[4], opponentManager, 14_000);

  const waveOne2 = new wave(stageTwoTrailInfo[0], opponentManager, 0);
  const waveTwo2 = new wave(stageTwoTrailInfo[1], opponentManager, 2500);
  const waveThree2 = new wave(stageTwoTrailInfo[2], opponentManager, 6000);
  const waveFour2 = new wave(stageTwoTrailInfo[3], opponentManager, 10_000);
  const waveFive2 = new wave(stageTwoTrailInfo[4], opponentManager, 14_000);

  const waveOne3 = new wave(stageThreeTrailInfo[0], opponentManager, 0);
  const waveTwo3 = new wave(stageThreeTrailInfo[1], opponentManager, 2500);
  const waveThree3 = new wave(stageThreeTrailInfo[2], opponentManager, 6000);
  const waveFour3 = new wave(stageThreeTrailInfo[3], opponentManager, 10_000);
  const waveFive3 = new wave(stageThreeTrailInfo[4], opponentManager, 14_000);

  const wavesByStage = [
    [waveOne1, waveTwo1, waveThree1, waveFour1, waveFive1],
    [waveOne2, waveTwo2, waveThree2, waveFour2, waveFive2],
    [waveOne3, waveTwo3, waveThree3, waveFour3, waveFive3],
  ];

  return wavesByStage[index];
}
