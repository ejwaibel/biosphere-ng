import utils from 'src/app/utils';
import { gender } from './gender';
import { clothing } from './clothing';

export class Person {
  id: string;
  age: number;
  clothing: string;
  dirtFactor: number;
  gender: string;
  isAlive: boolean;
  isMute: boolean;
  name: string;
  sleepFactor: number;
  weight: number;

  private _maxAge?: number;
  private _maxWeight?: number;

  constructor(name?: string, sex?: string) {
    this.id = utils.getUuid();
    this.isAlive = true;
    this.age = 0;
    this._maxAge = 70 + utils.getRandomNumber(15) + utils.getRandomNumber(15);

    // Set properties based on arguments to constructor
    this.gender = sex || gender.MALE;
    this.name = name || (this.gender === gender.MALE ? 'John Doe' : 'Jane Doe');

    // Set default values for instance of Person
    this.age = 1;
    this.clothing = clothing.NAKED;
    this.dirtFactor = 0;
    this.isMute = utils.getRandomNumber(2) < 2 ? false : true;
    this.sleepFactor = 10;
    // Person.thoughts = Person.thoughts[this.gender];
    this.weight = utils.getRandomNumber(this._maxWeight);
  }
}
