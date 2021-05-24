import {Component, OnDestroy, OnInit} from '@angular/core';
import { Event} from "../models/event.model";
import {EventService} from "../shared/event.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  timer: number
  eventsSubscription: Subscription
  pastEventsSubscription: Subscription
  events: Event[] = []
  pastEvents: Event[] = []

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventsSubscription = this.eventService.eventsChanged.subscribe((events: Event[]) => {
      this.events = events
    })
    this.pastEventsSubscription = this.eventService.pastEventsChanged.subscribe( (pastEvents: Event[]) => {
      this.pastEvents = pastEvents
    })
    this.events = this.eventService.getEvents()
    this.pastEvents = this.eventService.getPastEvents()

    this.timer = setInterval( () => {
      let toMinus = 0
      this.events.forEach( (event, index) => {
        if (new Date().getTime() > event.endDate.getTime()) {
          const copyEvent = {...event, status : 'past'}
          this.eventService.addPastEvent(index - toMinus, copyEvent)
          toMinus++
        }
      })
    }, 5000)
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

  onEdit(id: number) {
    this.eventService.editMode = true
    this.eventService.editItemIndex = id
    this.router.navigate(['/events/edit', id])
  }



}
