import { Component, OnInit } from '@angular/core';
import { BiosphereService } from '../biosphere.service';
import { Person } from "../person/Person";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _biosphereService: BiosphereService) { }

  ngOnInit() {
  }

  addPerson() {
    const p = new Person();
    console.log('addPerson | ', p);
    this._biosphereService.addPerson(p);
  }
}
