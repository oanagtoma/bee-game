import {Bee} from "./Bee";
import {BeeType} from "../shared/constants";
import {QueenBee} from "./QueenBee";
import {WorkerBee} from "./WorkerBee";
import {DroneBee} from "./DroneBee";

export class BeeFactory {
  public static getBee(bee: Bee): Bee {
    let tempBee;
    switch (bee.type) {
      case BeeType.QUEEN:
        tempBee = new QueenBee();
        Object.assign(tempBee, bee);
        return tempBee;
        break;
      case BeeType.WORKER:
        tempBee = new WorkerBee();
        Object.assign(tempBee, bee);
        return tempBee;
        break;
      case BeeType.DRONE:
        tempBee = new DroneBee();
        Object.assign(tempBee, bee);
        return tempBee;
        break;
      default:
        return bee;
        break;
    }
  }
}
