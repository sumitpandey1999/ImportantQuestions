// Write a function to partition an array into two sub-arrays: one with elements satisfying a condition and one with elements that don’t.

// partition([1, 2, 3, 4], n => n % 2 === 0); // [[2, 4], [1, 3]]

const partition = (array) => {
  const resultantArray = [];

  const arr1 = array.filter((item) => {
    return item % 2 === 0;
  });

  resultantArray.push(arr1);

  const arr2 = array.filter((item) => {
    return item % 2 !== 0;
  });
  resultantArray.push(arr2);

  return resultantArray;
};

const result = partition([1, 2, 3, 4]);
console.log(result);
