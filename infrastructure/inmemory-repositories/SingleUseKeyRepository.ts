import {
  SingleUseKeyRepository,
  SingleUseKey,
} from '../../domain/repositories';

export class SingleUseKeyRepository implements SingleUseKeyRepository {
  private singleUseKeys: SingleUseKey[] = [];
  retrieve(key: string): SingleUseKey {
    const singleUseKey = this.singleUseKeys.find(
      (singleUseKey) => singleUseKey.key === key,
    );
    return singleUseKey;
  }
  register(key: string): Pick<SingleUseKey, 'used'> {
    const singleUseKey = { key, used: false };
    this.singleUseKeys.push(singleUseKey);
    return singleUseKey;
  }
  markAsUsed(key: string): Pick<SingleUseKey, 'used'> {
    const singleUseKey = this.retreive(key);
    singleUseKey.used = true;
    return singleUseKey;
  }
}
