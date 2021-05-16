import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() link: string = ""
  @Input() iconPath: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
