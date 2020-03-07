import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject(undefined);
  currentData = this.dataSource.asObservable();
  constructor() { }
  changeData(data: object) {
    this.dataSource.next(data);
  }
}
