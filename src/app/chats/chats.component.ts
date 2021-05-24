import { Component, OnInit } from '@angular/core';
import {ModalService} from "../modal/modal.service";
import {NewChatModalComponent} from "./new-chat-modal/new-chat-modal.component";
import {ChatService} from "../shared/chat.service";
import {Observable, pipe} from "rxjs";
import {Chat} from "../models/chat.model";
import {UserService} from "../shared/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  chats: Chat[];
  me: Observable<User | undefined> = this.userService.me();

  constructor(private modalService: ModalService, private chatService: ChatService, private userService: UserService) { }

  ngOnInit(): void {
    this.chatService.chats.subscribe(pipe((chats: Chat[]) => {
      this.chats = chats;
      console.log(this.chats)
    }))
  }

  openNewChatModal() {
    this.modalService.open(NewChatModalComponent)
  }

}
