function sum(nums) {
  return nums.reduce((prev, curr) => prev + curr);
}

function multiply(nums) {
  return nums.reduce((prev, curr) => prev * curr);
}

const PI = 3.14;

module.exports = {
  sum,
  multiply,
  PI
}
