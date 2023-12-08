const getResult = require('./trebuchet.ts');
const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

test('Returns sum of value', () => {
  const rows = input.split('\n');
  expect(getResult(rows)).toBe(142);
})