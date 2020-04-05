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

  constructor(private personService: PersonService) {}

  public get persons$(): Observable<Person[]> {
    return this.personService.entities$;
  }

  public get selectedPerson$(): Observable<Person> {
    return this.state.pipe(pluck('selectedPerson'));
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
