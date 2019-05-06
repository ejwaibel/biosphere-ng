import { Component, OnInit } from '@angular/core';
import { BiosphereService } from '../biosphere.service';
import { EGender } from '../person/IPerson';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public population: Object = {
    [EGender.MALE]: 0,
    [EGender.FEMALE]: 0,
    total: 0,
  };

  constructor(private _biosphereService: BiosphereService) {
    this._biosphereService.personsSubject.subscribe(p => {
      this.population['total']++;
      console.log(p.gender);

      this.population[p.gender]++;
    });
  }

  ngOnInit() {
  }
}
