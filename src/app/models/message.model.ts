import {IMessageable} from "../shared/messageable.interface";

export class Message {
  sender: IMessageable;
  content: string;
  sent: Date;
}
