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
  postForm: FormGroup
  editMode = false

  constructor(private eventService: EventService, private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.editMode = this.postService.getEditMode()
    if (this.editMode) {
      const post = this.posts[this.postService.getEditItemIndex()]
      this.postForm = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        description: new FormControl(post.description, Validators.required),
        media: new FormControl(post.media, Validators.required),
        collection: new FormControl(post.collection),
        pinned: new FormControl(post.pinned),
        responsible: new FormControl(post.responsible),
        collaboration: new FormControl(post.collaboration)
      })
    } else {
     this.postForm = new FormGroup({
       title: new FormControl('', Validators.required),
       description: new FormControl('', Validators.required),
       media: new FormControl('', Validators.required),
       collection: new FormControl(''),
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
    console.log(this.postForm)
    this.postService.addPost(this.postForm)
    this.editMode = false
    this.router.navigate(['/posts'])
  }

  generateCollections(): Collection[] {
    return [
      new Collection(
        'A collection title',
        'A collection description',
        [
            this.postService.getPosts(),
            this.eventService.getEvents()
        ],
        Math.random() > 0.5
       ),
      new Collection(
        'A collection title',
        'A collection description',
        [
          this.postService.getPosts().slice(1, 2),
          this.eventService.getEvents().slice(1, 2)
        ],
        Math.random() > 0.5
        ),
      new Collection(
        'A collection title',
        'A collection description',
        [
          this.postService.getPosts().slice(2, 3),
          this.eventService.getEvents().slice(2, 3)
        ],
        Math.random() > 0.5
      )
    ]
  }

}
