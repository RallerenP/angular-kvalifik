import {Component, OnDestroy, OnInit} from '@angular/core';
import {Collection} from "../../models/collection.model";
import {EventService} from "../../shared/event.service";
import {PostService} from "../../shared/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit, OnDestroy {

  posts: Post[] = this.postService.getPosts()
  _post: Post;
  collections: Collection[] = []
  postForm: FormGroup
  editMode = false
  id: string;

  constructor(private eventService: EventService, private postService: PostService, private router: Router) {}

  async ngOnInit() {
    this.id = this.router.url.split('/')[3];

    this.editMode = this.id !== undefined

    if (this.editMode) {
      const post = await this.postService.getPost(this.id);
      this._post = post;

      this.postForm = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        description: new FormControl(post.description, Validators.required),
        media: new FormControl(post.media, Validators.required),
        pinned: new FormControl(post.pinned),
        responsible: new FormControl(post.responsible),
        collaboration: new FormControl(post.collaboration)
      })
    } else {
     this.postForm = new FormGroup({
       title: new FormControl('', Validators.required),
       description: new FormControl('', Validators.required),
       media: new FormControl('', Validators.required),
       pinned: new FormControl(false),
       responsible: new FormControl(''),
       collaboration: new FormControl('')
     })
    }
  }

  ngOnDestroy() {
    this.postService.editMode = false
    this.editMode = false
  }

  onSubmit() {
    if (this.editMode) {
      this.postService.update(this.id, this.postForm)
      this.router.navigate(['/posts'])
    } else {
      this.postService.addPost(this.postForm)
      this.router.navigate(['/posts'])
    }

    this.editMode = false

  }

}
