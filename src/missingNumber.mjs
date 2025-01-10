// Write a function to find the missing number in an array of n consecutive numbers.

const missingNumber = (array) => {
  let max = Math.max(...array);
  let min = Math.min(...array);

  let missingNumber = new Set();

  for (let i = min; i <= max; i++) {
    missingNumber.add(i);
  }

  for (let num of array) {
    missingNumber.delete(num);
  }

  return [...missingNumber];
};

const result = missingNumber([1, 2, 4, 5, 6, 9]);
console.log(result);
