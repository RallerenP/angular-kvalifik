import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserSignupDto} from "../dto/user-signup.dto";
import {CreateUserDto} from "../dto/create-user.dto";
import {UserLoginDto} from "../dto/user-login.dto";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('')
  password = new FormControl('');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit(e: any) {
    // Send file to database via redux or service, make sure reset() is done AFTER the HTTP request is sent
    e.preventDefault();
    const dto: UserLoginDto =  { email: this.email.value, password: this.password.value }
    await this.authService.login(dto)
  }

}
