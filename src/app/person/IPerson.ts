export enum EClothing {
  NAKED = 'nothing/naked',
};

export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
};

export interface IPersonAttributes {
  age: number;
  clothing: EClothing;
  dirtFactor: number;
  isAlive: boolean;
  isMute: boolean;
  sleepFactor: number;
  weight: number;
}

export interface IPerson extends IPersonAttributes {
  eat(): this;
  isLiving(): boolean;
}
