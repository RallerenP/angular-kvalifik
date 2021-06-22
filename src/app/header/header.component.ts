import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import firebase from "firebase/app";
import Auth = firebase.auth.Auth;
import {AngularFireAuth} from "@angular/fire/auth";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "../store/Store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedInAs: User | null;
  me: Observable<User | undefined> = this.userService.me();

  name: string;

  constructor(public auth: AngularFireAuth, public userService: UserService, private ngRedux: NgRedux<AppState>) {}

  async ngOnInit(): Promise<void> {
    this.ngRedux.select(state => state.user).subscribe(res => {
      if (res?.username !== undefined)
        this.name = res?.username;
    })
    // this.userService.me().subscribe(data => {
    //   if (data !== undefined) this.name = data!.name
    // })
  }

}
