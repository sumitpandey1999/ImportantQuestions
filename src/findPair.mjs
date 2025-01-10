// Find Pair with Target Sum: Write a function to find two numbers in an array that add up to a target sum.

function findPair(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [array[i], array[j]];
      }
    }
  }
}

const result = findPair([2, 7, 11, 15], 9);
console.log(result);
