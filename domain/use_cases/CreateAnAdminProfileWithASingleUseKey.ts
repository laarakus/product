import { Profile, ProfileRepository, KeyRepository } from '../repositories';

export class CreateAnAdminProfileWithASingleUseKey {
  constructor({
    profileRepository,
    singleUseKeyRepository,
  }: {
    profileRepository: IProfileRepository;
    singleUseKeyRepository: ISingleUseKeyRepository;
  }) {
    this.profileRepository = profileRepository;
    this.singleUseKeyRepository = singleUseKeyRepository;
  }

  execute({ key, email, password }) {
    const singleUseKey = this.singleUseKeyRepository.retrieve(key);
    if (!singleUseKey) throw Error('key not found');
    if (singleUseKey.used) throw Error('key already used');
    const profile: Profile = {
      email,
      password,
    };
    this.profileRepository.create(profile);
    this.singleUseKeyRepository.markAsUsed(key);
  }
}
