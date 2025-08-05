import { describe, expect, it } from 'vitest';

import { Container } from 'src/modules/container';

describe('Container', () => {
  it('constructor', () => {
    const c = new Container('hello');
    expect(c.name).toEqual('hello');
  });
});
