const rhombus = require('../src/rhombus.js');

describe('rhombus', () => {
  test('generates a rhombus for n = 3', () => {
    const expected = [
      [" ", "0", " "],
      ["0", "0", "0"],
      [" ", "0", " "]
    ];
    expect(rhombus(3)).toEqual(expected);
  });

  test('generates a rhombus for n = 5', () => {
    const expected = [
      [" ", " ", "0", " ", " "],
      [" ", "0", "0", "0", " "],
      ["0", "0", "0", "0", "0"],
      [" ", "0", "0", "0", " "],
      [" ", " ", "0", " ", " "]
    ];
    expect(rhombus(5)).toEqual(expected);
  });
});