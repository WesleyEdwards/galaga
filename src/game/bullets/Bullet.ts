import { BULLET_SPEED } from "../helpers/constants";
import { Coordinates } from "../helpers/types";

export abstract class Bullet {
  pos: Coordinates;
  constructor(pos: Coordinates) {
    this.pos = pos;
  }

  update(timeStamp: number, direction: number) {
    this.pos.y += BULLET_SPEED * timeStamp * direction;
  }
}
