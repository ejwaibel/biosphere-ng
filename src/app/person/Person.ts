import { EClothing, EGender, IPerson, IPersonAttributes } from './IPerson';
import utils from '../utils';

export class Person implements IPerson {
  public age: number;
  public clothing: EClothing;
  public dirtFactor: number;
  public gender: EGender;
  public isAlive: boolean;
  public isMute: boolean;
  public sleepFactor: number;
  public static thoughts: string;
  public weight: number;

  private _id: string;
  private _maxAge: number;
  private _maxWeight: number;
  private name: string;

  constructor(name?: string, gender?: EGender) {
    this._id = utils.getUuid();
    this.isAlive = true;
    this.age = 0;
    this._maxAge = 70 + utils.getRandomNumber(15) + utils.getRandomNumber(15);

    // Set properties based on arguments to constructor
    this.gender = gender || EGender.MALE;
    this.name = name || (this.gender === EGender.MALE ? 'John Doe' : 'Jane Doe');

    // Set default values for instance of Person
    this.age = 1;
    this.clothing = EClothing.NAKED;
    this.dirtFactor = 0;
    this.isMute = utils.getRandomNumber(2) < 2 ? false : true;
    this.sleepFactor = 10;
    // Person.thoughts = Person.thoughts[this.gender];
    this.weight = utils.getRandomNumber(this._maxWeight);
  }

  private _growOld(n = 0.25): boolean {
    this.age += n;

    return this.isLiving();
  }

  get id(): string {
    return this._id;
  }

  eat(): this {
    if (this._growOld()) {
      this.dirtFactor++;
      this.sleepFactor++;
      this.weight += this.age * 0.7;
    }

    return this;
  }
  exercise(): this {
    if (this._growOld(-0.1)) {
      this.dirtFactor += 15;
      this.weight -= this.weight / 80;
    }

    return this;
  }
  isLiving(): boolean {
    return this.age < this._maxAge && this.isAlive;
  }
  kill(): void {
    this.isAlive = false;
  }
  lazy(n): this {
    if (n > 0 && this._growOld(n)) {
      this.dirtFactor += 10;
    }

    return this;
  }
  shower(): this {
    if (this.dirtFactor > 1) {
      this.dirtFactor = this.dirtFactor / 2;
      this.sleepFactor -= 2;
    }

    return this;
  }
  silence(): this {
    this.isMute = true;
    return this;
  }
  sleep(n): this {
    if (n > 1 && this._growOld(n / 2)) {
      this.dirtFactor += n / 2;
      this.sleepFactor -= n;
    }

    return this;
  }
  work(hours): this {
    if (hours > 0 && this._growOld()) {
      this.dirtFactor += hours / 3;
      this.sleepFactor = hours * 1.5;
      this.weight += hours * 0.75;
    }

    return this;
  }
}
