import { IProfileRepository, Profile } from '../../domain/repositories';

export class ProfileRepository implements IProfileRepository {
  create(profile: Profile): Profile {
    return profile;
  }
}
