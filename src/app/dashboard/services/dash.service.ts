import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  dataByEvent: EventEmitter<any> = new EventEmitter<any>();
  saveByEvent: EventEmitter<any> = new EventEmitter<any>();

  private griditem: BehaviorSubject<string> = new BehaviorSubject<any>(
    'Initial Value'
  );
  data: Observable<any> = this.griditem.asObservable();

  constructor() {}

  sendItem(data: any) {
    this.griditem.next(data);
  }

  sendDataByEvent(data: any) {
    this.dataByEvent.emit(data);
  }

  saveLayoutByEvent(data: any) {
    this.saveByEvent.emit(data);
  }
}
