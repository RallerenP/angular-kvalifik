import {IMessageable, MessageableType} from "../shared/messageable.interface";
import {User} from "./user.model";

export class Group implements IMessageable{
  messageable_type: MessageableType;

  name: string;
  imageUrl: string;
  users: User[] = []

  getImage(): string {
    return this.imageUrl;
  }

  getName(): string {
    return this.name;
  }
}
