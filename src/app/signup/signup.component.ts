import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserSignupDto} from "../dto/user-signup.dto";
import {AuthService} from "../shared/auth.service";
import {UserService} from "../shared/user.service";
import {CreateUserDto} from "../dto/create-user.dto";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  email = new FormControl('')
  name = new FormControl('');
  password = new FormControl('');
  programme = new FormControl('');

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }


  async onSubmit(e: any) {
    // Send file to database via redux or service, make sure reset() is done AFTER the HTTP request is sent
    e.preventDefault();
    const dto: UserSignupDto =  { email: this.email.value, name: this.name.value, password: this.password.value }
    const user = await this.authService.signup(dto)

    if (!user.user?.uid) return;

    const createUserDto: CreateUserDto = { email: dto.email, name: dto.name, uid: user.user!.uid!, programme: this.programme.value }
    this.userService.create(createUserDto);
  }

}
