import { describe, expect, it, vi } from 'vitest';

const http = { latestResponse: { status: 200 } };
vi.mock('@open-ent/client', () => ({ odeServices: { http: () => http } }));

import { checkHttpResponse } from '~/services/api';

describe('checkHttpResponse', () => {
  it('ne lève pas sur un succès', () => {
    http.latestResponse.status = 200;
    expect(() => checkHttpResponse()).not.toThrow();
  });

  it.each([
    [401, 'unauthorized'],
    [404, 'notfound'],
    [500, 'error'],
  ])('lève sur un statut %i (ex. note supprimée refusée)', (status, expected) => {
    http.latestResponse.status = status;
    expect(() => checkHttpResponse()).toThrow(expected);
  });
});
