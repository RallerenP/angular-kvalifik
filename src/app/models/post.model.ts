import {Collection} from "./collection.model";

export class Post {
  title: string
  description: string
  media?: string
  collection: Collection[]
  pinned: boolean
  responsible: string
  collaboration: string
  status: string
  createdDate: Date
  activity: number[]

  constructor(title: string, description: string, media: string, collection: Collection[], pinned: boolean, responsible: string, collaboration: string, status: string, createdDate: Date, activity: number[]) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.collection = collection;
    this.pinned = pinned;
    this.responsible = responsible;
    this.collaboration = collaboration;
    this.status = status
    this.createdDate = createdDate
    this.activity = activity
  }
}
