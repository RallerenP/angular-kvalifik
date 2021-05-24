import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {ChatService} from "../../shared/chat.service";
import {ModalService} from "../../modal/modal.service";

@Component({
  selector: 'app-new-chat-modal',
  templateUrl: './new-chat-modal.component.html',
  styleUrls: ['./new-chat-modal.component.scss']
})
export class NewChatModalComponent implements OnInit {

  users = this.userService.getAll();

  constructor(private userService: UserService, private chatService: ChatService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  async newChat(uid: string) {
    await this.chatService.create(uid);
    this.modalService.close();
  }

}
