const isPalindrome = require("../src/isPalindrome.js");

test('isPalindrome test 1', () => {
    expect(isPalindrome("Шалаш")).toBe(true)
})

test('isPalindrome test 2', () => {
    expect(isPalindrome("лепс спел")).toBe(true)
})

test('isPalindrome test 3', () => {
    expect(isPalindrome("89т4309молпдки2п")).toBe(false)
})

test('isPalindrome test 4', () => {
    expect(isPalindrome("     ")).toBe(true)
})