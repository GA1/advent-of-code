const captcha = require('../src/day01');

test('example tests', () => {
  expect(captcha("1122")).toBe(2);
  // expect(captcha("1111")).toBe(4);
  // expect(captcha("91212129")).toBe(9);
});
