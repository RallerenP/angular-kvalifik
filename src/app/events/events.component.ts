import {Component, OnDestroy, OnInit} from '@angular/core';
import { Event} from "../models/event.model";
import {EventService} from "../shared/event.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  events: Event[] = []
  subscription: Subscription
  pastEvents: Event[] = []
  date: Date

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.date = new Date()
    this.subscription = this.eventService.get().subscribe( events => {
      this.events = events
      this.sortEvents()
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private sortEvents() {
    this.events.forEach( event => {
       if (new Date().getTime() > event.endDate.toDate().getTime()) {
         this.pastEvents.push({...event, status: 'past'})

       }
    })
  }

  onEdit(id: number) {
    this.eventService.editMode = true
    this.eventService.editItemIndex = id
    this.router.navigate(['/events/edit', id])
  }



}
