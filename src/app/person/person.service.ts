import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Person } from '../core/model/person.model';

@Injectable({ providedIn: 'root' })
export class PersonService extends EntityCollectionServiceBase<Person> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Person', serviceElementsFactory);
  }
}
