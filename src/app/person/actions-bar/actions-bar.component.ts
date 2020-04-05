import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { BiosphereService } from 'src/app/biosphere/biosphere.service';
import { Person } from 'src/app/core/model/person.model';

interface ActionType {
  action: string;
  icon: string;
  name: string;
  onClick?(person: Person): void,
};

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent implements OnInit {
  public actions: ActionType[];
  public selectedPerson$ = this.bioService.selectedPerson$;

  constructor(private bioService: BiosphereService, private personService: PersonService) { }

  ngOnInit() {
    this.actions = [{
      action: 'eat',
      icon: 'fastfood',
      name: 'Eat',
      onClick: this.personService.eat.bind(this.personService),
    }, {
      action: 'clothing',
      icon: 'store_mall_directory',
      name: 'Change Clothing',
      // onClick: () => { },
    }, {
      action: 'exercise',
      icon: 'fitness_center',
      name: 'Exercise',
      // onClick: () => { },
    }, {
      action: 'age',
      icon: 'timelapse',
      name: 'Increase Age',
      // onClick: () => { },
    }, {
      action: 'shower',
      icon: 'hot_tub',
      name: 'Shower',
      // onClick: () => { },
    }, {
      action: 'sleep',
      icon: 'local_hotel',
      name: 'Sleep',
      // onClick: () => { },
    }, {
      action: 'work',
      icon: 'attach_money',
      name: 'Work',
      // onClick: () => { },
    }, {
      action: 'mute',
      icon: 'volume_mute',
      name: 'Silence',
      // onClick: () => { },
    }, {
      action: 'kill',
      icon: 'delete',
      name: 'Kill',
      // onClick: () => { },
    }];
  }

}
