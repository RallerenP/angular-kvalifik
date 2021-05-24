import {IMessageable} from "../shared/messageable.interface";
import {Message} from "./message.model";

export class Chat {
  users: {0: IMessageable, 1: IMessageable} & Array<IMessageable>
  messages: Message[] = [];
}
