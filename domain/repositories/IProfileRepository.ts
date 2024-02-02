import { Profile } from './';

export interface IProfileRepository {
  create(profile: Profile): Omit<Profile, 'password'>;
}
