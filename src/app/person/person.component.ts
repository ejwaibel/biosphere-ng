import { Component, OnInit, Input } from '@angular/core';
import { BiosphereService } from '../biosphere/biosphere.service';
import { Person } from '../core/model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  public isShowDetails = false;

  constructor(private _biosphere: BiosphereService) { }

  ngOnInit() {
  }

}
