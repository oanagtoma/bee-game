import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Swarm} from "../models/Swarm";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  hive = new Swarm();
  username = "";
  userForm!: FormGroup;

  constructor(public cookieService: CookieService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: [null, [Validators.required, Validators.minLength(3)]],
    }, {updateOn: 'submit'});
    this.username = this.cookieService.get("username")?.toString() || "";

    //TODO: serialize hive json and add to session storage, then deserialize and use it

  }

  hitHive() {
    const indexOfBee = Math.floor(Math.random() * this.hive.healthReport.totalAliveBees);
    this.hive.hitSwarm(indexOfBee);
  }

  resetGame() {
    this.hive.resetHive();
  }

  startGame() {
    this.username = this.userForm.value.user.toString();
    if(this.userForm.valid) {
      this.cookieService.set("username", this.username, undefined, '/', 'localhost');
    }
  }

  @HostListener('window:onbeforeunload', ['$event'])
  onBeforeUnload() {
    this.deleteAllCookies();
  }

  deleteAllCookies() {
    this.cookieService.deleteAll('/', "localhost");
  }

  ngOnDestroy() {
    this.deleteAllCookies();
  }
}
