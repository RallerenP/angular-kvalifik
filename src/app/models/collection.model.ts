import {Post} from "./post.model";
import {Event} from "./event.model";

export class Collection {

  title: string
  description: string
  createdDate: Date
  content: [Post[], Event[]]
  pinned: boolean
  status: string

  constructor(title: string, description: string, createdDate: Date, content: [Post[], Event[]], pinned: boolean, status: string) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate
    this.content = content;
    this.pinned = pinned;
    this.status = status
  }
}
