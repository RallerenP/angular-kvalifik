import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {makeId} from "../util/utility";

export class Event {
  name: string;
  startDate: Timestamp
  endDate: Timestamp
  description: string
  eventSchedule: string[]
  photoUrl: string
  location: string
  pinned: boolean
  responsible: string
  collaboration: string
  roomBooking: string
  status: string
  id: string


  constructor(name: string, startDate: Timestamp, endDate: Timestamp, description: string, eventSchedule: string[], photoUrl: string, location: string, pinned: boolean, responsible: string, collaboration: string, roomBooking: string, status: string, id = makeId()) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.eventSchedule = eventSchedule;
    this.photoUrl = photoUrl;
    this.location = location;
    this.pinned = pinned;
    this.responsible = responsible;
    this.collaboration = collaboration;
    this.roomBooking = roomBooking;
    this.status = status;
    this.id = id
  }


}
