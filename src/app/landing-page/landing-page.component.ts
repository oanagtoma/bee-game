import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Swarm} from "../models/Swarm";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Bee} from "../models/Bee";
import {BeeFactory} from "../models/BeeFactory";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  hive = new Swarm();
  username = "";
  userForm!: FormGroup;

  constructor(public cookieService: CookieService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: [null, [Validators.required, Validators.minLength(3)]],
    }, {updateOn: 'submit'});

    this.username = localStorage.getItem("username") || "";
    let swarm = localStorage.getItem("hive");
    if(swarm !== null){
      Object.assign(this.hive,JSON.parse(localStorage.getItem("hive") || ""));
      this.hive.aliveBees = this.hive.aliveBees.map((bee: Bee) => BeeFactory.getBee(bee));
      this.hive.deadBees = this.hive.deadBees.map((bee: Bee) => BeeFactory.getBee(bee));
    }
  }

  hitHive() {
    const indexOfBee = Math.floor(Math.random() * this.hive.healthReport.totalAliveBees);
    this.hive.hitSwarm(indexOfBee);
    localStorage.setItem("hive", JSON.stringify(this.hive));
  }

  resetGame() {
    localStorage.removeItem("hive");
    this.hive.resetHive();
  }

  startGame() {
    this.username = this.userForm.value.user.toString();
    if(this.userForm.valid) {
      localStorage.setItem("username", this.username);
    }
  }

  logout() {
    localStorage.removeItem("username");
    this.resetGame();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("username") ? true : false;
  }
}
