import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserSignupDto } from "../dto/user-signup.dto";
import {UserService} from "./user.service";
import {UserLoginDto} from "../dto/user-login.dto";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private userService: UserService) {

  }

  public async signup(dto: UserSignupDto) {
    return await this.afAuth.createUserWithEmailAndPassword(dto.email, dto.password);
  }

  public async login(dto: UserLoginDto) {
    return await this.afAuth.signInWithEmailAndPassword(dto.email, dto.password)
  }
}
