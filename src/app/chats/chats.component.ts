import { Component, OnInit } from '@angular/core';
import {ModalService} from "../modal/modal.service";
import {NewChatModalComponent} from "./new-chat-modal/new-chat-modal.component";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openNewChatModal() {
    console.log("something")
    this.modalService.open(NewChatModalComponent)
  }

}
