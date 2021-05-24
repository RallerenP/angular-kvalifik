import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');
  private _component: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  get component() {
    return this._component;
  }

  open(component: any) {
    this._component.next(component);
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
