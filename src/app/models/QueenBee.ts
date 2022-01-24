import { Bee } from "./Bee";
import {BeeStatus, BeeType} from "../shared/constants";
import { BeeBeeeehaviour } from "./BeeBeeeehaviour";

export class QueenBee implements Bee {
  hitDamage = 8;
  initialHP = 100;
  remainingHP = this.initialHP;
  status = BeeStatus.ALIVE;
  type = BeeType.QUEEN;
  beeId = 1;

  receiveDamage(): number {
    return BeeBeeeehaviour.receiveDamage(this);
  }

  changeBeeStatus(): void {
    return BeeBeeeehaviour.changeBeeStatus(this);
  }

  resetHP(): void {
    return BeeBeeeehaviour.resetHP(this);
  }


}
