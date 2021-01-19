import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class HomeService {
  shareInput$: Observable<string>;
  private shareInputSubject = new Subject<any>();

  constructor() {
    this.shareInput$ = this.shareInputSubject.asObservable();
  }

  shareInput(value: string) {
    this.shareInputSubject.next(value);
  }
}
