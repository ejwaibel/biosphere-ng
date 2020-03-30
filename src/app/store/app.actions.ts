import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddPerson = '[Person] Add Person',
  RemovePerson = '[Person] Remove Person',
}

export class AddPerson implements Action {
  readonly type = ActionTypes.AddPerson;
}
