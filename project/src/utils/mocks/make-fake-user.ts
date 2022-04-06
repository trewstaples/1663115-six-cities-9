import { datatype, internet, lorem } from 'faker';
import { UserType } from '../../types/state';

export const makeFakeUser = (): UserType => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: lorem.word(),
});
