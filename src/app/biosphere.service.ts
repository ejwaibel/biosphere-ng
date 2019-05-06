import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiosphereService {
  private _persons: Object[];
  public personsSubject = new Subject<any>();

  constructor() {
    this._persons = [];
  }

  addPerson(p: Object) {
    this._persons.push(p);
    this.personsSubject.next(p)
  }

  getPerson(id?: string) {
    if (id) {
      return [];
    }

    return this.personsSubject.asObservable();
  }
}
