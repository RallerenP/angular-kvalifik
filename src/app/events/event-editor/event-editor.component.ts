import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../shared/event.service";
import {Event} from "../../models/event.model";

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  eventForm: FormGroup
  events: Event[] = this.eventService.getEvents()

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    if (this.eventService.editMode) {
      const event = this.events[this.eventService.editItemIndex]
      this.eventForm = new FormGroup({
        title: new FormControl(event.name, Validators.required),
        start: new FormGroup({
          date: new FormControl('', Validators.required),
          time: new FormControl('', Validators.required)
        }),
        end: new FormGroup({
          date: new FormControl('', Validators.required),
          time: new FormControl('', Validators.required)
        }),
        description: new FormControl(event.description, Validators.required),
        eventSchedule: new FormArray([]),
        photoUrl: new FormControl(event.photoUrl, Validators.required),
        location: new FormControl(event.location, Validators.required),
        pinned: new FormControl(event.pinned, Validators.required),
        responsible: new FormControl(event.responsible, Validators.required),
        collaboration: new FormControl(event.collaboration, Validators.required)
      })
    } else {
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
        responsible: new FormControl('', Validators.required),
        collaboration: new FormControl('', Validators.required)
      })
    }

  }

  onSubmit() {
    this.eventService.addEvent(this.eventForm)
  }

}
