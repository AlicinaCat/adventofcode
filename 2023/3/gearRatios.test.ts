const getResult = require('./gearRatios.ts');

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

test('Returns sum of value', () => {
  const rows = input.split('\n');
  expect(getResult(rows)).toBe(4361);
})