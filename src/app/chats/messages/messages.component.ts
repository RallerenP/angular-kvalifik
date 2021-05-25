import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MessageService} from "../../shared/message.service";
import {Chat} from "../../models/chat.model";
import {Observable, pipe} from "rxjs";
import {FireStoreMessage, Message} from "../../models/message.model";
import {User} from "../../models/user.model";
import {UserService} from "../../shared/user.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() chat: Observable<Chat | null>;
  _chat: Chat;
  constructor(private messageService: MessageService, private userService: UserService) { }

  messages: Observable<Message[]>
  message: FormControl = new FormControl('');
  me: User;

  ngOnInit(): void {
    this.userService.me().subscribe((user: User | undefined) => {
      if (user === undefined) return;

      this.me = user;
    })

    this.chat.subscribe(
      pipe((chat: Chat | null) => {
        if (chat === null || chat === undefined) return;

        this.messages = this.messageService.get(chat.id);

        this.messages.toPromise().then(result => console.log(result));
        this._chat = chat;
      })
    )
  }

  async inputKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") this.send();
  }

  async send() {
    const toSend: FireStoreMessage = { sender: this.me.uid, sent: Timestamp.now(), content: this.message.value, chat_id: this._chat.id}
    await this.messageService.send(toSend);
    this.message.setValue('');
  }

}
