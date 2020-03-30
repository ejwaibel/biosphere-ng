import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiosphereService } from '../biosphere/biosphere.service';
import { gender } from '../person/person.interface';
import { Person } from '../core/model/person.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public population = {
    [gender.MALE]: 0,
    [gender.FEMALE]: 0,
    total: 0,
  };

  public persons$: Observable<Person[]>;

  constructor(private biosphereService: BiosphereService) {
    // this.biosphereService.personsSubject.subscribe(p => {
    //   this.population.total++;
    //   console.log(p.gender);

    //   this.population[p.gender]++;
    // });
    this.persons$ = this.biosphereService.persons$;
  }

  ngOnInit() {
  }
}
