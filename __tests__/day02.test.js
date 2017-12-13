const checksum = require('../src/day02');

test('example tests', () => {
  expect(checksum("5 1 9 5\n" +
                  "7 5 3\n" +
                  "2 4 6 8")).toBe(18);
});
