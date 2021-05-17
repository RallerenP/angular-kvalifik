import {Injectable} from '@angular/core';
import {Post} from "../models/post.model";
import {FormGroup} from "@angular/forms";
import {CollectionService} from "./collection.service";

@Injectable({
  providedIn: 'root'
})
export class PostService{

  posts: Post[] = this.generatePosts()
  editMode: boolean = false
  editItemIndex: number = -1

  constructor(private collectionService: CollectionService) { }

  generatePosts(): Post[] {
    return [
      new Post(
      'An interesting title',
      'An interesting description',
      'Video',
      [this.collectionService.collections[0]],
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
        [this.collectionService.collections[1]],
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
        [this.collectionService.collections[2]],
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
