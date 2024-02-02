import { ISingleUseKeyRepository } from '../repositories';

export class RegisterKeyAsSingleUse {
  constructor({
    singleUseKeyRepository,
  }: {
    singleUseKeyRepository: ISingleUseKeyRepository;
  }) {
    this.singleUseKeyRepository = singleUseKeyRepository;
  }

  execute({ key }) {
    const singleUseKey = this.singleUseKeyRepository.retrieve(key);
    if (singleUseKey) throw Error('key already exists');
    return this.singleUseKeyRepository.register(key);
  }
}
