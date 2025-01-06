const countOfSymbols = require("../src/countOfSymbols.js");

test('countOfSymbols test 1', () => {
    expect(countOfSymbols("мама", 'а')).toBe(2)
})

test('countOfSymbols test 2', () => {
    expect(countOfSymbols("Привет, я Саша, и я программироую на Java Script", ' ')).toBe(8)
})

test('countOfSymbols test 3', () => {
    expect(countOfSymbols("qwertyqwerty", 'q')).toBe(2)
})

test('countOfSymbols test 4', () => {
    expect(countOfSymbols("Россия", 'с')).toBe(2)
})