import {Post} from "./post.model";
import {Event} from "./event.model";

export class Collection {

  title: string
  description: string
  content: [Post[], Event[]]
  pinned: boolean


  constructor(title: string, description: string, content: [Post[], Event[]], pinned: boolean) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.pinned = pinned;
  }
}
