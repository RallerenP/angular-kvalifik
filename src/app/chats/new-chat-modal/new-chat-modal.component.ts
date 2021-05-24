import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-new-chat-modal',
  templateUrl: './new-chat-modal.component.html',
  styleUrls: ['./new-chat-modal.component.scss']
})
export class NewChatModalComponent implements OnInit {

  users = this.userService.getAll();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
