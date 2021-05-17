import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {Collaboration} from "../models/collaboration.model";
import {PostService} from "../shared/post.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invitationsToShow: Post[]
  invitations: Post[] = this.postService.getPosts()
  collaborationsToShow: Collaboration[]
  collaborations: Collaboration[] = [this.generateCollab(), this.generateCollab(), this.generateCollab(), this.generateCollab(), this.generateCollab()]
  date: string = "19 may 2020"
  showAllInvitations: boolean = false
  showAllCollaborations: boolean = false

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.invitationsToShow = this.invitations.slice(0, 2)
    this.collaborationsToShow = this.collaborations.slice(0, 2)
  }

  onShowAllInvitations() {
    if (this.showAllInvitations) {
      this.invitationsToShow = this.invitations.slice(0, 2)
    } else {
      this.invitationsToShow = this.invitations
    }
    this.showAllInvitations = !this.showAllInvitations
  }

  onShowAllCollaborations() {
    if (this.showAllCollaborations) {
      this.collaborationsToShow = this.collaborations.slice(0, 2)
    } else {
      this.collaborationsToShow = this.collaborations
    }
    this.showAllCollaborations = !this.showAllCollaborations
  }



  generateCollab(): Collaboration {
    return new Collaboration(
      'A new collaboration',
      'A collaboration description',
      'A specific location'
    )
  }

}
