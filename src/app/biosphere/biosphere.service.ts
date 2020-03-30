import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../core/model/person.model';
import { PersonService } from '../person/person.service';

@Injectable({
  providedIn: 'root'
})
export class BiosphereService {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.persons$ = personService.entities$;
  }

  addPerson(p: Person) {
    console.log('addPerson | ', p);
    this.personService.add(p);
  }

  getPerson(id?: string) {
    if (id) {
      return [];
    }

    return this.persons$;
  }
}
