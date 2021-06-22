import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../shared/event.service";
import {Event} from "../../models/event.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit, OnDestroy {

  eventForm: FormGroup
  events: Event[] = []
  subscription: Subscription

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.get().subscribe( events => {
      this.events = events

      if (this.eventService.editMode) {
        const event = this.events[this.eventService.editItemIndex]
        const startDate = event.startDate.toDate()
        const endDate = event.endDate.toDate()
        console.log(`${event.startDate.toDate().getFullYear()}-${event.startDate.toDate().getDate().toString().padStart(2, '0')}-${(event.startDate.toDate().getMonth() + 1).toString().padStart(2, '0')}`)
        this.eventForm = new FormGroup({
          title: new FormControl(event.name, Validators.required),
          start: new FormGroup({
            date: new FormControl('', Validators.required),
            time: new FormControl(startDate.getHours().toString().padStart(2, "0") + ":" + startDate.getMinutes().toString().padStart(2, "0"), Validators.required)
          }),
          end: new FormGroup({
            date: new FormControl('', Validators.required),
            time: new FormControl(endDate.getHours().toString().padStart(2, "0") + ":" + endDate.getMinutes().toString().padStart(2, "0"), Validators.required)
          }),
          description: new FormControl(event.description, Validators.required),
          eventSchedule: new FormArray([]),
          photoUrl: new FormControl(event.photoUrl, Validators.required),
          location: new FormControl(event.location, Validators.required),
          pinned: new FormControl(event.pinned, Validators.required),
          responsible: new FormControl(event.responsible),
          collaboration: new FormControl(event.collaboration)
        })
      }

    })

    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      start: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required)
      }),
      end: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required)
      }),
      description: new FormControl('', Validators.required),
      eventSchedule: new FormArray([]),
      photoUrl: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      pinned: new FormControl('', Validators.required),
      responsible: new FormControl(''),
      collaboration: new FormControl('')
    })



  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.eventService.editMode = false
  }

  get editMode() {
    return this.eventService.editMode
  }

  onSubmit() {
    this.eventService.addEvent(this.eventForm)
    this.eventService.editMode = false
  }

  onEdit() {
    const event = this.events[this.eventService.editItemIndex]
    this.eventService.editEvent(this.eventForm, event.id)
    this.eventService.editMode = false
  }

}
