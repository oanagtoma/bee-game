import {swarmDronesNumber, SwarmStatus, swarmWorkersNumber} from "../shared/constants";

export class SwarmHealthReport {
  aliveWorkerBees = swarmWorkersNumber;
  aliveDroneBees = swarmDronesNumber;
  isQueenAlive = true;
  totalAliveBees = this.aliveWorkerBees + this.aliveDroneBees + (this.isQueenAlive ? 1 : 0);
  swarmStatus = this.totalAliveBees > 0 && !this.isQueenAlive ?
    SwarmStatus.DEAD : SwarmStatus.ALIVE;
  hitLog: string[] = [];
}
