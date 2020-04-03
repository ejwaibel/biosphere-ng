import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityOp
} from '@ngrx/data';
import { Person } from '../core/model/person.model';
import utils from '../utils';
import { clothing } from '../core/model/clothing';
import { gender } from '../core/model/gender';

const MAX_WEIGHT = 500;

@Injectable({ providedIn: 'root' })
export class PersonService extends EntityCollectionServiceBase<Person> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Person', serviceElementsFactory);
  }

  init(name?: string, sex?: string): Person {
    const identity = sex || gender.MALE;

    return {
      id: utils.getUuid(),
      isAlive: true,
      gender: identity,
      name: name || (identity === gender.MALE ? 'John Doe' : 'Jane Doe'),

      // Set default values for Person
      age: 1,
      clothing: clothing.NAKED,
      dirtFactor: 0,
      isMute: utils.getRandomNumber(2) < 2 ? false : true,
      sleepFactor: 10,
      weight: utils.getRandomNumber(MAX_WEIGHT),
    }
  }

  // private _growOld(n = 0.25): boolean {
  //   this.age += n;

  //   return this.isLiving();
  // }

  eat(p: Person): void {
    console.log('eat:', p);
  //   if (this._growOld()) {
  //     this.dirtFactor++;
  //     this.sleepFactor++;
  //     this.weight += this.age * 0.7;
  //   }

  //   return this;
  // }
  // exercise(): this {
  //   if (this._growOld(-0.1)) {
  //     this.dirtFactor += 15;
  //     this.weight -= this.weight / 80;
  //   }
  }
  // isLiving(): boolean {
  //   return this.age < this._maxAge && this.isAlive;
  // }
  // kill(): void {
  //   this.isAlive = false;
  // }
  // lazy(n): this {
  //   if (n > 0 && this._growOld(n)) {
  //     this.dirtFactor += 10;
  //   }

  //   return this;
  // }
  // shower(): this {
  //   if (this.dirtFactor > 1) {
  //     this.dirtFactor = this.dirtFactor / 2;
  //     this.sleepFactor -= 2;
  //   }

  //   return this;
  // }
  // silence(): this {
  //   this.isMute = true;
  //   return this;
  // }
  // sleep(n): this {
  //   if (n > 1 && this._growOld(n / 2)) {
  //     this.dirtFactor += n / 2;
  //     this.sleepFactor -= n;
  //   }

  //   return this;
  // }
  // work(hours): this {
  //   if (hours > 0 && this._growOld()) {
  //     this.dirtFactor += hours / 3;
  //     this.sleepFactor = hours * 1.5;
  //     this.weight += hours * 0.75;
  //   }

  //   return this;
  // }
}
