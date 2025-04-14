import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9f352f6b-dfde-443d-9f9a-f162c08e546a',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f408c757-8301-422e-a39b-208a9ba1a64e',
};

export const sampleWithFullData: IAuthority = {
  name: '3832550e-e16f-4c1d-b0a5-acd28888b66b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
