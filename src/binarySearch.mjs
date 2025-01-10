// Binary Search in Array

const binarySearch = (array, target) => {
  if (array.length === 0) return false;

  array.sort((a, b) => a - b);

  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);

    if (array[midIndex] === target) return midIndex;

    if (array[midIndex] > target) {
      max = midIndex - 1;
    } else {
      min = midIndex + 1;
    }
  }
  return false;
};

const result = binarySearch([2, 6, 7, 23, 4, 1], 7);
console.log(result);
