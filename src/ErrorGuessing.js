const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
      throw new Error('Cannot divide by zero');
  }
  return a / b;
}


module.exports = { divide };