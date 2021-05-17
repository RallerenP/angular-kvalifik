import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {Collaboration} from "../models/collaboration.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invitationsToShow!: Post[];
  invitations: Post[] = [this.generatePost(), this.generatePost(), this.generatePost()]
  collaborationsToShow!: Post[]
  collaborations: Post[] = [this.generatePost(), this.generatePost(), this.generatePost(), this.generatePost(), this.generatePost()]
  date: string = "19 may 2020"
  showAllInvitations: boolean = false
  showAllCollaborations: boolean = false

  followers: number = Math.floor(Math.random() * 1000);
  followersLastWeek: number = Math.floor(Math.random() * 1000);

  followerDiff: number = Math.abs(this.followers - this.followersLastWeek);

  constructor() {}

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

  generatePost(): Post {
    return new Post(
      'An interesting title',
      'An interesting description',
      'Video',
      [
        'Stuff',
        'Even more stuff'
      ],
      true,
      'cph management consulting club',
      'Someone to collab with'
    )
  }

  generateCollab(): Collaboration {
    return new Collaboration(
      'A new collaboration',
      'A collaboration description',
      'A specific location'
    )
  }

}
