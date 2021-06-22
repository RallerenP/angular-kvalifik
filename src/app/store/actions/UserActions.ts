import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "../Store";

@Injectable({ providedIn: 'root' })
export class UserActions {
  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  static SET_USERNAME: string = 'SET_USERNAME';
  setUsername(username: string | undefined): void {
    this.ngRedux.dispatch({
      type: UserActions.SET_USERNAME,
      payload: username
    })
  }
}
