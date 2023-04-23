import { OPPONENT_BULLET_SPEED } from "../helpers/constants";
import { Coordinates } from "../helpers/types";

export class OpponentBullet {
  pos: Coordinates;
  constructor(pos: Coordinates) {
    this.pos = pos;
  }

  update(timeStamp: number) {
    this.pos.y += OPPONENT_BULLET_SPEED * timeStamp;
  }
}
