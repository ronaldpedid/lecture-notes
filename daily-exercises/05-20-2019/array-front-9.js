/*

Create a function called arrayFront9 that takes a single array
parameter. Return true if any of the first 4 elements is equal to
9. Otherwise, return false.

*/

function arrayFront9(nums) {
  let end = nums.length >= 4 ? 4 : nums.length;

  for (let i = 0; i < end; i++) {
    if (nums[i] === 9) {
      return true;
    }
  }

  return false;
}

function arrayFront9Reduce(nums) {
  return nums.reduce((prev, curr, index) => {
    if (prev) return true;

    if (index > 3 || (nums.length - 1 === index && curr !== 9)) {
      return false;
    }

    if (curr === 9) {
      return true;
    }

  }, false);
}

console.log(arrayFront9([1, 2, 9, 3, 4])); // → true
console.log(arrayFront9([1, 2, 3, 4, 9])); // → false
console.log(arrayFront9([1, 2, 3, 4, 5])); // → false
console.log(arrayFront9([4, 9])); // → true
console.log(arrayFront9([4, 5])); // → false
console.log(arrayFront9([])); // → false
