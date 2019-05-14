import { Component, OnInit } from '@angular/core';
import { BiosphereService } from '../biosphere.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  private isShowDetails: boolean = false;

  constructor(private _biosphere: BiosphereService) { }

  ngOnInit() {
  }

}
