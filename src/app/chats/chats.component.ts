import { Component, OnInit } from '@angular/core';
import {ModalService} from "../modal/modal.service";
import {NewChatModalComponent} from "./new-chat-modal/new-chat-modal.component";
import {ChatService} from "../shared/chat.service";
import {BehaviorSubject, Observable, pipe, ReplaySubject} from "rxjs";
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
  selected: ReplaySubject<Chat> = new ReplaySubject<Chat>();

  constructor(private modalService: ModalService, private chatService: ChatService, private userService: UserService) { }

  ngOnInit(): void {
    this.chatService.chats.subscribe(pipe((chats: Chat[]) => {
      this.chats = chats;
      this.selected.next(this.chats[0])
    }))
  }

  openNewChatModal() {
    this.modalService.open(NewChatModalComponent)
  }

  select(chat: Chat) {
    this.selected.next(chat);
  }

}
