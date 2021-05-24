export class Event {
  name: string;
  startDate: Date
  endDate: Date
  description: string
  eventSchedule: string[]
  photoUrl: string
  location: string
  pinned: boolean
  responsible: string
  collaboration: string
  roomBooking: string
  status: string


  constructor(name: string, startDate: Date, endDate: Date, description: string, eventSchedule: string[], photoUrl: string, location: string, pinned: boolean, responsible: string, collaboration: string, roomBooking: string, status: string) {
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
  }
}
