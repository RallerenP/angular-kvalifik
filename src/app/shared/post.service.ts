import {Injectable} from '@angular/core';
import {Post} from "../models/post.model";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PostService{

  posts: Post[] = this.generatePosts()
  editMode: boolean
  editItemIndex: number

  constructor() { }

  generatePosts(): Post[] {
    return [
      new Post(
      'An interesting title',
      'An interesting description',
      'Video',
      [
        'Stuff',
        'Even more stuff'
      ],
      true,
      'cph management consulting club',
      'Someone to collab with',
      Math.random() > 0.5 ? 'draft' : 'published',
      new Date(),
      [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
    ),
      new Post(
        'An interesting title 2',
        'An interesting description 2',
        'Podcast',
        [
          'Stuff',
          'Even more stuff'
        ],
        true,
        'cph management consulting club',
        'Someone to collab with',
        Math.random() > 0.5 ? 'draft' : 'published',
        new Date(),
        [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
      ),
      new Post(
        'An interesting title 3',
        'An interesting description 3',
        'Photos',
        [
          'Stuff',
          'Even more stuff'
        ],
        true,
        'cph management consulting club',
        'Someone to collab with',
        Math.random() > 0.5 ? 'draft' : 'published',
        new Date(),
        [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
      )
    ]
  }

  addPost(formData: FormGroup) {
    const values = formData.value
    this.posts.push(new Post(
      values.title,
      values.description,
      values.media,
      values.collection,
      values.pinned,
      values.responsible,
      values.collaboration,
      Math.random() > 0.5 ? 'draft' : 'published',
      new Date(),
      [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
    ))
  }

  getPosts(): Post[] {
    return this.posts
  }

  getEditMode(): boolean {
    return this.editMode
  }

  getEditItemIndex(): number {
    return this.editItemIndex
  }
}
