import { Coordinates } from "../helpers/types";
import { Bullet } from "./Bullet";

export class EnemyBullet extends Bullet {
  constructor(pos: Coordinates) {
    super(pos);
  }
  update(timeStamp: number) {
    super.update(timeStamp, 1)
  }
}
