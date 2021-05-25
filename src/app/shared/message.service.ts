import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {FireStoreMessage, Message} from "../models/message.model";
import {Observable, pipe, ReplaySubject, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private afStore: AngularFirestore, private userService: UserService) { }

  send(message: FireStoreMessage) {
    const doc = this.afStore.collection<FireStoreMessage>('messages').add(message);
  }

  get(chat_id: string): Observable<Message[]> {
    const messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>();
    return this.afStore.collection<FireStoreMessage>('messages', ref => ref.where('chat_id', '==', chat_id))
      .valueChanges()
      .pipe(
        map((data: FireStoreMessage[]) => {
          return data.map((_message: FireStoreMessage) => {
            const sender = this.userService.get(_message.sender);
            const message: Message = { sender, chat_id: _message.chat_id, sent: _message.sent, content: _message.content};
            return message;
          }).sort((a: Message, b: Message) => { return a.sent.seconds - b.sent.seconds })
        })
      )

  }
}
