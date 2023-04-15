import { Coordinates, OpponentType } from "../../game/helpers/types";
import { path1 } from "./BeePath1";
import { path1Butterfly } from "./ButterflyPath1";

const firstPathGenerators: Record<
  OpponentType,
  (endPos: Coordinates) => Coordinates[]
> = {
  bee: path1,
  butterfly: path1Butterfly,
  bossGalaga: () => [],
};
export function generateFirstPath(
  endPos: Coordinates,
  oppType: OpponentType
): Coordinates[] {
  return firstPathGenerators[oppType](endPos);
}
