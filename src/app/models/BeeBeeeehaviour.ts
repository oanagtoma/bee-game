import { Bee } from "./Bee";
import { BeeStatus } from "../shared/constants";

export class BeeBeeeehaviour {

  static receiveDamage(bee: Bee): number {
    bee.remainingHP = bee.remainingHP - bee.hitDamage;

    if (bee.remainingHP <= 0) {
      this.changeBeeStatus(bee);
      bee.remainingHP = 0;
    }

    return bee.remainingHP;
  }

  static changeBeeStatus(bee: Bee): void {
    bee.status = bee.status === BeeStatus.ALIVE ? BeeStatus.DEAD : BeeStatus.ALIVE;
  }

  static resetHP(bee: Bee): void {
    bee.remainingHP = bee.initialHP;
  }
}
