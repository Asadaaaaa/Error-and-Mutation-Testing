const { divide } = require('../src/ErrorGuessing.js');

test('throws error if first argument is not a number', () => {
  expect(() => divide('a', 2)).toThrow('Both arguments must be numbers');
});

test('throws error if second argument is not a number', () => {
  expect(() => divide(4, 'b')).toThrow('Both arguments must be numbers');
});

test('throws error if division by zero occurs', () => {
  expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
});

test('returns correct division result for valid inputs', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error if only one argument is provided', () => {
  expect(() => divide(10)).toThrow('Both arguments must be numbers');
});