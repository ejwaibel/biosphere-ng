import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { BiosphereService } from '../../biosphere/biosphere.service';
import { gender } from '../../person/person.interface';
import { Person } from '../model/person.model';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public population: any = {
    [gender.MALE]: 0,
    [gender.FEMALE]: 0,
    total: 0,
  };

  public persons$: Observable<Person[]>;

  constructor(
    private biosphereService: BiosphereService,
    private personService: PersonService,
    private store: Store,
  ) {
    this.persons$ = this.biosphereService.persons$;

    this.population.total = this.store.select(this.personService.selectors.selectCount);
    // this.personService.getWithQuery('gender=' + gender.MALE).pipe(
    //   tap((males: Person) => this.population[gender.MALE] = males.length)
    // );
  }

  ngOnInit() {
  }
}
