import { Bee } from "./Bee";
import {BeeStatus, BeeType} from "../shared/constants";
import { BeeBeeeehaviour } from "./BeeBeeeehaviour";

export class DroneBee implements Bee {
  hitDamage = 12;
  initialHP = 50;
  remainingHP = this.initialHP;
  status = BeeStatus.ALIVE;
  type = BeeType.DRONE;
  beeId = 0;

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
