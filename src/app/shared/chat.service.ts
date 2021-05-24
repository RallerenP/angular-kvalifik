import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Chat, FireStoreChat} from "../models/chat.model";
import {BehaviorSubject, Observable, pipe, Subject} from "rxjs";
import {UserService} from "./user.service";
import firebase from "firebase";
import User = firebase.User;
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private uid: string;
  private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>([]);

  constructor(private afStore: AngularFirestore, private userService: UserService) {
    userService.me().subscribe((data) => {
      this.uid = data!.uid
      this.afStore.collection<FireStoreChat>('chats', ref => ref.where('users', 'array-contains', this.uid))
        .valueChanges()
        .pipe(
          map((data) => {
            return data.map((fireStoreChat => {
              const users = this.userService.getMultipleByIds(fireStoreChat.users);
              const chat: Chat = {users, messages: []}
              return chat;
            }))
          })
        )
        .subscribe(pipe((data: Chat[]) => {
          this._chats.next(data)
        }));

      this._chats.subscribe((chats) => console.log(chats))
    })

  }

  public get chats(): Observable<Chat[]>{
    return this._chats.asObservable();
  }

  async create(other_uid: string) {
    await this.afStore.collection<FireStoreChat>('chats').add({ users: [this.uid, other_uid], messages: [] });
  }
}
