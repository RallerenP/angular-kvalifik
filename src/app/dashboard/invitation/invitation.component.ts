import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  @Input() invitation!: Post;
  @Input() date!: string;

  @Input() accepted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
