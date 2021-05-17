import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {PostService} from "../shared/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = this.postService.getPosts()

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {}

  onEdit(id: number) {
    this.postService.editMode = true
    this.postService.editItemIndex = id
    this.router.navigate(['/posts/edit', id])
  }

}
