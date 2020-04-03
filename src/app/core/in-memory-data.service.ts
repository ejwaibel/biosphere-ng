import { Injectable } from '@angular/core';

import { RequestInfo, InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './model/person.model';
// import { Order } from './model/order';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;
  maxId = 0;

  /** Create the in-memory database. Sample data is found below. */
  createDb(reqInfo?: RequestInfo) {
    return { persons };
  }

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId = 1 + collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }
}

const persons: Person[] = [
  {
    id: '6be685e7-d06a-481b-adaa-189dd0d3c693',
    name: 'Ted James',
    age: 20,
    clothing: 'naked',
    dirtFactor: 0.1,
    gender: 'male',
    isAlive: true,
    isMute: false,
    sleepFactor: 0.1,
    weight: 120,
  },

  {
    id: 'b1e95916-7534-11ea-bc55-0242ac130003',
    name: 'Fred Williams',
    age: 18,
    clothing: 'naked',
    dirtFactor: 0.2,
    gender: 'male',
    isAlive: true,
    isMute: false,
    sleepFactor: 0.5,
    weight: 195,
  },

  {
    id: 'bb3bac6c-7534-11ea-bc55-0242ac130003',
    name: 'Julie Andrews',
    age: 44,
    clothing: 'naked',
    dirtFactor: 0.2,
    gender: 'female',
    isAlive: true,
    isMute: false,
    sleepFactor: 0.3,
    weight: 180,
  },

  {
    id: 'bf4d6ade-7534-11ea-bc55-0242ac130003',
    name: 'Terri Luge',
    age: 36,
    clothing: 'naked',
    dirtFactor: 0.1,
    gender: 'female',
    isAlive: true,
    isMute: false,
    sleepFactor: 0.7,
    weight: 140,
  },
];
