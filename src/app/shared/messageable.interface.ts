export enum MessageableType {
  INDIVIDUAL,
  USER
}

export interface IMessageable {
  getName(): string;
  getImage(): string;
  messageable_type: MessageableType;
}
