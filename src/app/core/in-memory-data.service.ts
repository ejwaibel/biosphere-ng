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
    id: '4444-1111-2222',
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
    id: '4444-1111-2222',
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
    id: '4444-1111-2222',
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
    id: '4444-1111-2222',
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
];
