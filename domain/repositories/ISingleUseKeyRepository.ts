import { SingleUseKey } from '../entities';

export interface ISingleUseKeyRepository {
  retreive(key: string): SingleUseKey;
  register(key: string): Pick<SingleUseKey, 'used'>;
  markAsUsed(key: string): Pick<SingleUseKey, 'used'>;
}
