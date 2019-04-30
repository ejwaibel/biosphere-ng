import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private population: object = {
    total: 0,
    male: 0,
    female: 0,
  };
  
  constructor() { }

  ngOnInit() {
  }

}
