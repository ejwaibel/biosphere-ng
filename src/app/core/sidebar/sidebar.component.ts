import { Component, OnInit } from '@angular/core';
import { BiosphereService } from '../../biosphere/biosphere.service';
import { Person } from '../model/person.model';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private biosphereService: BiosphereService, private personService: PersonService) {}

  ngOnInit() {}

  addPerson() {
    const p = this.personService.init();
    this.biosphereService.addPerson(p);
  }
}
