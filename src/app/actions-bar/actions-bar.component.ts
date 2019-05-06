import { Component, OnInit } from '@angular/core';

interface ActionType {
  action: string,
  icon: string,
  name: string,
  onClick: Function,
};

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent implements OnInit {
  private _actions: ActionType[];

  constructor() { }

  ngOnInit() {
    this._actions = [{
      action: 'eat',
      icon: 'fastfood',
      name: 'Eat',
      onClick: () => { },
    }, {
      action: 'clothing',
      icon: 'store_mall_directory',
      name: 'Change Clothing',
      onClick: () => { },
    }, {
      action: 'exercise',
      icon: 'fitness_center',
      name: 'Exercise',
      onClick: () => { },
    }, {
      action: 'age',
      icon: 'timelapse',
      name: 'Increase Age',
      onClick: () => { },
    }, {
      action: 'shower',
      icon: 'hot_tub',
      name: 'Shower',
      onClick: () => { },
    }, {
      action: 'sleep',
      icon: 'local_hotel',
      name: 'Sleep',
      onClick: () => { },
    }, {
      action: 'work',
      icon: 'attach_money',
      name: 'Work',
      onClick: () => { },
    }, {
      action: 'mute',
      icon: 'volume_mute',
      name: 'Silence',
      onClick: () => { },
    }, {
      action: 'kill',
      icon: 'delete',
      name: 'Kill',
      onClick: () => { },
    }];
  }

}
