export const clothing = Object.freeze({
  NAKED: 'nothing/naked',
});

export const gender = Object.freeze({
  MALE: 'male',
  FEMALE: 'female',
});

export interface PersonActions {
  eat(): this;
  isLiving(): boolean;
}

export interface PersonAttributes {
  age: number;
  clothing: string;
  dirtFactor: number;
  isAlive: boolean;
  isMute: boolean;
  sleepFactor: number;
  weight: number;
}
