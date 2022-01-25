import {BeeStatus, BeeType} from "../shared/constants";

export interface Bee {
  initialHP: number;
  remainingHP: number;
  hitDamage: number;
  status: BeeStatus;
  beeId: number;
  type: BeeType;

  changeBeeStatus(): void;
  receiveDamage(): number;
  resetHP(): void;
}
