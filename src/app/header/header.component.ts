import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import firebase from "firebase/app";
import Auth = firebase.auth.Auth;
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedInAs: User | null;
  me: Observable<User | undefined> = this.userService.me();

  name: string;

  constructor(public auth: AngularFireAuth, public userService: UserService) {}

  async ngOnInit(): Promise<void> {
    this.userService.me().subscribe(data => this.name = data!.name)
  }

}
