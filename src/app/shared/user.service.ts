import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signedInAs: string = "CBS Outdoor & Adventure"

  constructor() { }

  getUser() {
    return this.signedInAs
  }
}
