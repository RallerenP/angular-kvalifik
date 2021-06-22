import {Injectable} from '@angular/core';
import {Post} from "../models/post.model";
import {FormGroup} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { logging } from "protractor";

@Injectable({
  providedIn: 'root'
})
export class PostService{

  posts: Post[];
  _posts: BehaviorSubject<(Post & { _id: string })[]> = new BehaviorSubject<(Post & { _id: string })[]>([]);
  editMode: boolean = false
  editItemIndex: number = -1

  constructor(private http: HttpClient) {
    this._posts.subscribe((posts: Post[]) => {
     this.posts = posts;
    })
  }

  addPost(formData: FormGroup) {
    const values = formData.value

    const post = new Post(
      values.title,
      values.description,
      values.media,
      values.pinned,
      values.responsible.title,
      values.collaboration.title,
      Math.random() > 0.5 ? 'draft' : 'published',
      new Date(),
      [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
    )

    console.log(post.responsible, typeof post.responsible)

    const body = {
      fields: {
        title: {
          stringValue: post.title
        },
        description: {
          stringValue: post.description
        },
        media: {
          stringValue: post.media
        },
        pinned: {
          booleanValue: post.pinned
        },
        responsible: {
          stringValue: post.responsible
        },
        status: {
          stringValue: post.status
        },
        collaboration: {
          stringValue: post.collaboration
        }
      }
    }

    this.http.post('https://firestore.googleapis.com/v1/projects/angular-exam-project/databases/(default)/documents/posts/', body).subscribe((data: any) => {
      this.getPosts();
    })

  }

  update(id: string, formData: FormGroup) {
    const values = formData.value

    const post = new Post(
      values.title,
      values.description,
      values.media,
      values.pinned,
      values.responsible.title,
      values.collaboration.title,
      Math.random() > 0.5 ? 'draft' : 'published',
      new Date(),
      [Math.round(Math.random() * 10), Math.round(Math.random() * 50)]
    )

    console.log(post.responsible, typeof post.responsible)

    const body = {
      fields: {
        title: {
          stringValue: post.title
        },
        description: {
          stringValue: post.description
        },
        media: {
          stringValue: post.media
        },
        pinned: {
          booleanValue: post.pinned
        },
        responsible: {
          stringValue: post.responsible
        },
        status: {
          stringValue: post.status
        },
        collaboration: {
          stringValue: post.collaboration
        }
      }
    }

    this.http.patch(`https://firestore.googleapis.com/v1/projects/angular-exam-project/databases/(default)/documents/posts/${id}`, body).subscribe((data: any) => {
      this.getPosts();
    })

  }

  deletePost(id: string) {
    this.http.delete(`https://firestore.googleapis.com/v1/projects/angular-exam-project/databases/(default)/documents/posts/${id}`).subscribe((data: any) => {
      this.getPosts()
    })
  }

  getPosts(): Post[] {
    this.http.get('https://firestore.googleapis.com/v1/projects/angular-exam-project/databases/(default)/documents/posts/').subscribe((data: any) => {
      const posts = data.documents.map((post: any) => {
        const splits = post.name.split('/');
        return {...this.read(post.fields), _id: splits[splits.length - 1]};
      })

      this._posts.next(posts);
    })
    return this.posts
  }

  async getPost(id: string): Promise<Post> {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/angular-exam-project/databases/(default)/documents/posts/${id}`);
    const post = this.read((await response.json()).fields)

    return post;
  }


  private read(fields: any): Post {
    const {
      title,
      description,
      media,
      pinned,
      responsible,
      collaboration,
      status,
      createdDate,
      activity
    } = fields;

    return new Post(
      title.stringValue,
      description.stringValue,
      media.stringValue,
      pinned.booleanValue,
      responsible.stringValue,
      collaboration.stringValue,
      status.stringValue,
      new Date(),
      [7, 9]);
  }

  getEditMode(): boolean {
    return this.editMode
  }

  getEditItemIndex(): number {
    return this.editItemIndex
  }
}
