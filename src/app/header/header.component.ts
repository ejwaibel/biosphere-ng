import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiosphereService } from '../biosphere/biosphere.service';
import { gender } from '../person/person.interface';
import { Person } from '../core/model/person.model';
import { PersonService } from '../person/person.service';
import { Store } from '@ngrx/store';

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
  }

  ngOnInit() {
  }
}
