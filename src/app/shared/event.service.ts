import { Injectable } from '@angular/core';
import {Event} from "../models/event.model";
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsChanged: Subject<Event[]> = new Subject<Event[]>()
  events: Event[] = []
  pastEventsChanged: Subject<Event[]> = new Subject<Event[]>()
  pastEvents: Event[] = []
  editMode: boolean = false
  editItemIndex: number = -1

  constructor() { }

  getEvents(): Event[] {
    return this.events.slice()
  }

  getPastEvents(): Event[] {
    return this.pastEvents.slice()
  }

  addEvent(form: FormGroup) {
    const convertedStart = this.dateConverter(form.get('start.date')?.value, form.get('start.time')?.value)
    const convertedEnd =  this.dateConverter(form.get('end.date')?.value, form.get('end.time')?.value)

    const event = new Event(
      form.get('title')?.value,
      convertedStart,
      convertedEnd,
      form.get('description')?.value,
      form.get('eventSchedule')?.value,
      form.get('photoUrl')?.value,
      form.get('location')?.value,
      form.get('pinned')?.value,
      form.get('responsible')?.value,
      form.get('collaboration')?.value,
      'Some room bookings',
      'published'
    )
    this.events.push(event)
    this.eventsChanged.next(this.events.slice())
    console.log(this.events)
    console.log(this.eventsChanged)
  }

  addPastEvent(index: number, event: Event) {
    this.pastEvents.push(event)
    this.events.splice(index, 1)
    this.eventsChanged.next(this.events.slice())
    this.pastEventsChanged.next(this.pastEvents.slice())
  }

  dateConverter(date: string, time: string): Date {
    const dateArray = date.split("-")
    const timeArray = time.split(":")
    return new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2], +timeArray[0], +timeArray[1])
  }

}
