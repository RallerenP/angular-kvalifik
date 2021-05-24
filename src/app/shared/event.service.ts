import { Injectable } from '@angular/core';
import {Event} from "../models/event.model";
import {FormGroup} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase/app";
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Observable<Event[]>
  editMode: boolean = false
  editItemIndex: number = -1



  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
    this.events = afStore.collection<Event>('events').valueChanges()
  }

  get(): Observable<Event[]> {
    return this.events
  }

  addEvent(form: FormGroup) {
    const event = this.createEvent(form)
    this.afStore.collection('events').doc(event.id).set(Object.assign({}, event))
  }

  editEvent(form: FormGroup, id: string) {
    const event = this.createEvent(form, id)
    this.afStore.collection('events').doc(id).update(Object.assign({}, event))
  }

  dateConverter(date: string, time: string): Date {
    const dateArray = date.split("-")
    const timeArray = time.split(":")
    return new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2], +timeArray[0], +timeArray[1])
  }

  createEvent(form: FormGroup, id?: string | undefined) {
    const convertedStart = this.dateConverter(form.get('start.date')?.value, form.get('start.time')?.value)
    const convertedEnd =  this.dateConverter(form.get('end.date')?.value, form.get('end.time')?.value)

    return new Event(
      form.get('title')?.value,
      Timestamp.fromDate(convertedStart),
      Timestamp.fromDate(convertedEnd),
      form.get('description')?.value,
      form.get('eventSchedule')?.value,
      form.get('photoUrl')?.value,
      form.get('location')?.value,
      form.get('pinned')?.value,
      form.get('responsible')?.value,
      form.get('collaboration')?.value,
      'Some room bookings',
      'published',
      id
    )
  }

}
