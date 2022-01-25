import {QueenBee} from "./QueenBee";
import {WorkerBee} from "./WorkerBee";
import {DroneBee} from "./DroneBee";
import {SwarmHealthReport} from "./SwarmHealthReport";
import {BeeType, swarmDronesNumber, SwarmStatus, swarmWorkersNumber} from "../shared/constants";
import {Bee} from "./Bee";

export class Swarm {
  aliveBees = new Array<Bee>();
  deadBees = new Array<Bee>();
  healthReport = new SwarmHealthReport();

  constructor() {
    this.initializeSwarm();
  }

  initializeSwarm() {
    this.aliveBees.push(new QueenBee());
    for (let i = 0; i < swarmWorkersNumber; i++) {
      let workerBee = new WorkerBee();
      workerBee.beeId = i+1;
      this.aliveBees.push(workerBee);
    }

    for (let i = 0; i < swarmDronesNumber; i++) {
      let droneBee = new DroneBee();
      droneBee.beeId = i+1;
      this.aliveBees.push(droneBee);
    }
  }

  hitSwarm(indexOfBee: number): void {
    let currentBee = this.aliveBees[indexOfBee];
    currentBee.receiveDamage();
    this.healthReport.hitLog.unshift(`You hit ${currentBee.type} ${currentBee.beeId} and dealt ${currentBee.hitDamage} damage. \n`);
    if(currentBee.remainingHP === 0) {
      switch (currentBee.type) {
        case BeeType.QUEEN:
          this.healthReport.swarmStatus = SwarmStatus.DEAD;
          this.healthReport.isQueenAlive = false;
          break;
        case BeeType.WORKER:
          this.healthReport.aliveWorkerBees--;
          break;
        case BeeType.DRONE:
          this.healthReport.aliveDroneBees--;
          break;
      }

      this.deadBees.push(currentBee);
      this.healthReport.totalAliveBees--;

      this.aliveBees.splice(indexOfBee,1);
    }
  }

  resetHive(): void {
    this.aliveBees = new Array<Bee>();
    this.deadBees = new Array<Bee>();
    this.healthReport = new SwarmHealthReport();
    this.initializeSwarm();
  }

}
