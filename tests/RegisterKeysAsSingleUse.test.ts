import assert from 'assert/strict';
import test from 'node:test';
import { RegisterKeyAsSingleUse } from '../domain/api';
import { SingleUseKeyRepository } from '../infrastructure/inmemory-repositories';

const singleUseKeyRepository = new SingleUseKeyRepository();

// initial condition
// action
// expected behaviour

test('register key as single use', (t) => {
  const key = 'd2d289b9-ec91-4cb2-8f78-d5e11d06bc45';

  const result = new RegisterKeyAsSingleUse({ singleUseKeyRepository }).execute(
    { key },
  );

  assert.strictEqual(result.used, false);
});

test('register existing key as single use', (t) => {
  const key = 'd2d289b9-ec91-4cb2-8f78-d5e11d06bc45';

  const action = () => {
    new RegisterKeyAsSingleUse({ singleUseKeyRepository }).execute({ key });
    new RegisterKeyAsSingleUse({ singleUseKeyRepository }).execute({ key });
  };

  assert.throws(action, Error);
});
