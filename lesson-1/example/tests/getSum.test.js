const getSum = require("../src/getSum.js");

test('getSum test 1', () => {
    expect(getSum(1, 1)).toBe(2) // 1 + 1 = 2
})

test('getSum test 2', () => {
    expect(getSum(2, 2)).toBe(4) // 2 + 2 = 4
})

test('getSum test 3', () => {
    expect(getSum(4, 0)).toBe(4) // 4 + 0 = 4
})

test('getSum test 4', () => {
    expect(getSum(-7, -2)).toBe(-9) // (-7) + (-2) = -9
})