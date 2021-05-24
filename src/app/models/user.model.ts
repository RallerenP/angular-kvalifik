import {IMessageable, MessageableType} from "../shared/messageable.interface";

export enum UserType {
  VOLUNTEER,
  ADMIN
}

export class User implements IMessageable {
  private readonly _name: string;
  private readonly imageUrl: string;
  private programme: string;
  private uid: string;

  messageable_type: MessageableType = MessageableType.USER;


  constructor(name: string, imageUrl: string, programme: string, uid: string) {
    this._name = name;
    this.imageUrl = imageUrl;
    this.programme = programme;
    this.uid = uid;
  }

  public get name() {
    return this._name
  }

  getName(): string {
    return this._name;
  }

  getImage(): string {
    return this.imageUrl;
  }
}
