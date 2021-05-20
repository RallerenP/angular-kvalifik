import { Component, OnInit } from '@angular/core';
import { Event} from "../models/event.model";
import {EventService} from "../shared/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  timer: number;

  events: Event[] = this.eventService.getEvents()
  pastEvents: Event[] = []

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.timer = setTimeout( () => {
      this.events.forEach( event => {
        const copyEvent = {...event, status : 'past'}
        this.pastEvents.push(copyEvent)
      })
    }, 3000)
  }

  onEdit(id: number) {
    this.eventService.editMode = true
    this.eventService.editItemIndex = id
    this.router.navigate(['/events/edit', id])
  }

}
