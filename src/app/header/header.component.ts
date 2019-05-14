import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiosphereService } from '../biosphere.service';
import { gender } from '../person/person.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public population: object = {
    [gender.MALE]: 0,
    [gender.FEMALE]: 0,
    total: 0,
  };

  private _persons$: Observable<object>[];

  constructor(private biosphereService: BiosphereService) {
    // this.biosphereService.personsSubject.subscribe(p => {
    //   this.population.total++;
    //   console.log(p.gender);

    //   this.population[p.gender]++;
    // });
    this._persons$ = this.biosphereService.getPerson();
  }

  ngOnInit() {
  }
}
