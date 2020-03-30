import { Component, OnInit } from '@angular/core';
import { BiosphereService } from '../biosphere/biosphere.service';
import { Person } from '../core/model/person.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private biosphereService: BiosphereService) {}

  ngOnInit() {}

  addPerson() {
    const p = new Person();
    this.biosphereService.addPerson(p);
  }
}
