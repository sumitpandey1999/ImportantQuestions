// Given a string, write a function that counts the frequency of each character and returns the result as an object.

const countFrequeny = (array) => {
  const resultantArray = {};

  for (let key of array) {
    resultantArray[key] = (resultantArray[key] || 0) + 1;
  }
  return resultantArray;
};

const result = countFrequeny([2, 4, 5, 2, 3, 4]);

console.log(result);
