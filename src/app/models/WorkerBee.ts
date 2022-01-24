import { Bee } from "./Bee";
import {BeeStatus, BeeType} from "../shared/constants";
import { BeeBeeeehaviour } from "./BeeBeeeehaviour";

export class WorkerBee implements Bee {
  hitDamage = 10;
  initialHP = 75;
  remainingHP = this.initialHP;
  status = BeeStatus.ALIVE;
  type = BeeType.WORKER;
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
