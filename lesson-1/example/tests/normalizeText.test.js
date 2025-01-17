const normalizeText = require('../src/normalizeText');

describe('normalizeText', () => {
  test('normalizes text with punctuation and spaces', () => {
    const input = "привет,Серега,как твои дела?надеюсь,что хорошо";
    const expected = "Привет, Серега, как твои дела? Надеюсь, что хорошо.";
    expect(normalizeText(input)).toBe(expected);
  });
});