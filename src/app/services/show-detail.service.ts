import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {

  private buttonClicked = new Subject<boolean>();

  buttonClicked$ = this.buttonClicked.asObservable();

  constructor() { }

  toggleButton(value: boolean) {
    this.buttonClicked.next(value);
  }
}
