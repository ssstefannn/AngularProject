import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {

  private flagSource = new BehaviorSubject<boolean>(false);
  currentFlag = this.flagSource.asObservable();

  constructor() { }

  changeFlag(flag: boolean) {
    this.flagSource.next(flag);
  }
}
