export class Post {
  title: string
  description: string
  media?: string
  pinned: boolean
  responsible: string
  collaboration: string
  status: 'draft' | 'published'
  createdDate: Date
  activity: number[]

  constructor(title: string, description: string, media: string, pinned: boolean, responsible: string, collaboration: string, status: 'draft' | 'published', createdDate: Date, activity: number[]) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.pinned = pinned;
    this.responsible = responsible;
    this.collaboration = collaboration;
    this.status = status
    this.createdDate = createdDate
    this.activity = activity
  }
}
