import 'jest';
import Container from 'src/modules/container';

describe('Container', () => {
  test('pass', () => {
    const c = new Container('hello');
    expect(c.name).toEqual('hello');
  });
});
