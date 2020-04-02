import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person } from '../core/model/person.model';
import { PersonService } from '../person/person.service';
import { pluck } from 'rxjs/operators';

export interface BiosphereState {
  selectedPerson: Person,
};

const initialState: BiosphereState = {
  selectedPerson: null,
}

@Injectable({
  providedIn: 'root'
})
export class BiosphereService {
  private state: BehaviorSubject<BiosphereState> = new BehaviorSubject(initialState);

  public persons$: Observable<Person[]>;
  public selectedPerson$ = this.state.pipe(pluck('selectedPerson'));

  constructor(private personService: PersonService) {
    this.persons$ = personService.entities$;
  }

  addPerson(p: Person) {
    this.personService.add(p);
  }

  selectPerson(p: Person) {
    this.state.next({
      ...this.state.getValue(),
      selectedPerson: p,
    })
  }
}
