import { Coordinates, OpponentType } from "../../game/helpers/types";
import { beePath1 } from "./stage1/Wave1";
import { path2 } from "./stage1/Wave2";

const firstPathGenerators: Record<
  OpponentType,
  (endPos: Coordinates) => Coordinates[]
> = {
  bee: beePath1,
  butterfly: path2,
  bossGalaga: path2,
};
export function generateFirstPath(
  endPos: Coordinates,
  oppType: OpponentType
): Coordinates[] {
  return firstPathGenerators[oppType](endPos);
}
