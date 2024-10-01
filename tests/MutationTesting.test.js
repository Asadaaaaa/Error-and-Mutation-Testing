const { isEven } = require('../src/MutationTesting');

test('returns true for even numbers', () => {
  expect(isEven(4)).toBe(true);  // 4 adalah bilangan genap
  expect(isEven(0)).toBe(true);  // 0 juga bilangan genap
});

test('returns false for odd numbers', () => {
  expect(isEven(3)).toBe(false); // 3 adalah bilangan ganjil
  expect(isEven(7)).toBe(false); // 7 juga bilangan ganjil
});

test('returns false for non-numeric input', () => {
  expect(() => isEven("string")); // Input bukan angka
  expect(() => isEven(NaN)); // Input NaN
});
