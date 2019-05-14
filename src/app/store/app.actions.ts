import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddPerson = '[Person] Load Persons',
  RRRRemovePerson = '[Person] Load Persons',
}

export class AddPerson implements Action {
  readonly type = ActionTypes.AddPerson;
}
