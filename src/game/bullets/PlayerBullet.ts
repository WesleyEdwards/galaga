import { BULLET_SPEED } from "../helpers/constants";
import { Coordinates } from "../helpers/types";

export class PlayerBullet {
  pos: Coordinates;
  constructor(pos: Coordinates) {
    this.pos = pos;
  }

  update(timeStamp: number) {
    this.pos.y += BULLET_SPEED * timeStamp * -1;
  }
}
