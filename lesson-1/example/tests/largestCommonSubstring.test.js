const largestCommonSubstring = require('../src/largestCommonSubstring.js');

describe('largestCommonSubstring', () => {
  test('finds the largest common substring', () => {
    const str1 = "Через часик пойду в зал";
    const str2 = "Или на часик упаду поспать";
    expect(largestCommonSubstring(str1, str2)).toBe(" часик ");
  });
});
