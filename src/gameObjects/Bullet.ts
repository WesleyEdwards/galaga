import { BULLET_RADIUS, BULLET_SPEED } from "../helpers/constants";
import { Coordinates } from "../helpers/types";

export class Bullet {
  pos: Coordinates;
  constructor(pos: Coordinates) {
    this.pos = pos;
  }
  update(timeStamp: number) {
    this.pos.y -= BULLET_SPEED * timeStamp;
  }

  get center() {
    return { x: this.pos.x + BULLET_RADIUS, y: this.pos.y + BULLET_RADIUS };
  }
}
