import {IMessageable} from "../shared/messageable.interface";
import {Message} from "./message.model";
import {Observable} from "rxjs";
import firebase from "firebase";
import {User} from "./user.model";


export class Chat {
  users: Observable<User[]>;
  id: string;
}

// What is stored on the FireStore
export class FireStoreChat {
  users: string[]; // UIDs
}
