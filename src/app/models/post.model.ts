export class Post {
  title: string
  description: string
  media?: string
  collection?: string[]
  pinned: boolean
  responsible: string
  collaboration: string


  constructor(title: string, description: string, media: string, collection: string[], pinned: boolean, responsible: string, collaboration: string) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.collection = collection;
    this.pinned = pinned;
    this.responsible = responsible;
    this.collaboration = collaboration;
  }
}
