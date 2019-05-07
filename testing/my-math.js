function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function average(nums) {
  let sum = nums.reduce((prev, curr) => prev + curr);
  return sum / nums.length;
}

module.exports = {
  sum,
  multiply,
  average
}