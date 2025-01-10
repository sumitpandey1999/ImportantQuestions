// Move Zeros to End: Implement a function to move all zeroes in an array to the end, maintaining the order of non-zero elements.

const moveZeros = (array) => {
  const nonZeroElement = array.filter((item) => item !== 0);

  let totalZeroCount = array.length - nonZeroElement.length;

  let resultantArray = nonZeroElement.concat(Array(totalZeroCount).fill(0));

  return resultantArray;
};

const result = moveZeros([0, 1, 0, 0, 0, 3, 12]);
console.log(result); // Output: [1, 3, 12, 0, 0]
