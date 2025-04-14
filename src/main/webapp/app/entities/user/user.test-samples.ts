import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2269,
  login: 'hEr}hs@rpNf',
};

export const sampleWithPartialData: IUser = {
  id: 20057,
  login: 'd!@t5XIG\\YmxnLf\\)P0\\?7b\\(4Rzjy\\[5qHp5',
};

export const sampleWithFullData: IUser = {
  id: 22343,
  login: '@2',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
