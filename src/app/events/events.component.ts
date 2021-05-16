import { Component, OnInit } from '@angular/core';
import { Event} from "../models/event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

   private date = new Date()

  events: Event[] = [
    new Event('Winter Pride', this.date, this.date, 'Some description', 'Some schedule',
      'https://yt3.ggpht.com/-ib-OD4Hpqmo/AAAAAAAAAAI/AAAAAAAAAAA/mFkBKpTKbIc/s900-c-k-no/photo.jpg', 'Helsingør 3000', true,
      'RallerenP','Cafe Nexus','idk', 'DRAFT')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
