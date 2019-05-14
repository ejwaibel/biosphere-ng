import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiosphereService {
  persons$: Observable<object>[];

  constructor(private store: Store<{ people: Array<object>}>) {
    this.persons$ = select('persons');
  }

  addPerson(p: object) {
    // this._persons.push(p);
  }

  getPerson(id?: string) {
    if (id) {
      return [];
    }

    return this.persons$;
  }
}
