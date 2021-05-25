import {User} from "./user.model";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Observable} from "rxjs";

export class Message {
  sender: Observable<User | undefined>;
  chat_id: string;
  content: string;
  sent: Timestamp;
}

export class FireStoreMessage {
  sender: string;
  content: string;
  chat_id: string;
  sent: Timestamp;
}
