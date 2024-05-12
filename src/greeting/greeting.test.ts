import { greeting } from './greeting';

describe(greeting.name, () => {
  it.each([
    [undefined, 'Hello, World!'],
    ['You', 'Hello, You!'],
  ])('greeting(%s) -> %s', (input, expected) => {
    expect(greeting(input)).toBe(expected);
  });
});
