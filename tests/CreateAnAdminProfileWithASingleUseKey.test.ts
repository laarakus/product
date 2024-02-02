// make populating singleusekey data base composable
// how to composable tests ?

import assert from 'assert/strict';
import test from 'node:test';
import { CreateAnAdminProfileWithASingleUseKey } from '../domain/api';
import { SingleUseKeyRepository, ProfileRepository } from '../infrastructure';

const singleUseKeyRepository = new SingleUseKeyRepository();
const profileRepository = new ProfileRepository();

test('create an admin profile with a single use key', (t) => {
  const key = 'd2d289b9-ec91-4cb2-8f78-d5e11d06bc45';
  const username = 'laarakus';
  const password = 'password';

  const result = new CreateAnAdminProfileWithASingleUseKey({
    singleUseKeyRepository,
    profileRepository,
  }).execute({ key, username, password });

  assert.strictEqual(result, { username });
});
