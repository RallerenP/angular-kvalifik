import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signedInAs: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.signedInAs = this.userService.getUser()
  }

}
