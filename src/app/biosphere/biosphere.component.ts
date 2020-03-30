import { Component, OnInit } from '@angular/core';
import { BiosphereService } from './biosphere.service';
import { Person } from '../core/model/person.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-biosphere',
  templateUrl: './biosphere.component.html',
  styleUrls: ['./biosphere.component.scss']
})
export class BiosphereComponent implements OnInit {
  public persons$: Observable<Person[]>;

  constructor(private bioService: BiosphereService) {
    this.persons$ = bioService.persons$;
  }

  ngOnInit() {
  }

}
