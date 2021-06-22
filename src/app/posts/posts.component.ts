import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {PostService} from "../shared/post.service";
import {Router} from "@angular/router";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = this.postService.getPosts()
  searchInput = new FormControl('');

  constructor(public postService: PostService, private router: Router) { }

  ngOnInit(): void {}

  onEdit(id: number) {
    this.postService.editMode = true
    this.postService.editItemIndex = id
    this.router.navigate(['/posts/edit', id])
  }

  onDelete(id: string) {
    this.postService.deletePost(id);
  }

}
