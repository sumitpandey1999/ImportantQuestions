// Write a function that takes an array of numbers and returns the second largest number.

const secondLargestNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array[array.length - 2];
};

const result = secondLargestNumber([2, 9, 6, 8, 7, 12, 24]);
console.log(result);
