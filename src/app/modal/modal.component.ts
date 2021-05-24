import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "./modal.service";
import {Observable} from "rxjs";
import {ModalDirective} from "./modal.directive";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  display: Observable<'open' | 'close'> = this.modalService.watch();
  componentWatch: Observable<any> = this.modalService.component;
  component: any;

  @ViewChild(ModalDirective) modalContent: ModalDirective

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.componentWatch.subscribe((component) => {
      console.log(component)
      if (component === null) return

      const factory = this.componentFactoryResolver.resolveComponentFactory(component)

      const viewContainerRef = this.modalContent.viewContainerRef;
      viewContainerRef.clear();
      viewContainerRef.createComponent(factory);
    })

    this.display.subscribe((display) => {
      console.log(display)
      if (!display) return;

    })
  }

  containerClick(event: MouseEvent) {
    this.modalService.close();
  }

  modalClick(event: MouseEvent) {
    event.stopPropagation();
  }

}
