import { SingleUseKeyRepository } from '../../infrastructure/inmemory-repositories';
import { ProfileRepository } from '../../infrastructure/dynamodb-repositories';
import { CreateAnAdminProfileWithASingleUseKey } from '../../domain/api';

new CreateAnAdminProfileWithASingleUseKey({
  singleUseKeyRepository: new SingleUseKeyRepository(),
  profileRepository: new ProfileRepository(),
}).execute({
  key: 'single-use-key',
  email: 'email@example.com',
  password: 'never-in-code',
});
