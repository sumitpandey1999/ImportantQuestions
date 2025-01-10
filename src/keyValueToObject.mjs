// Implement a function that converts an array of key-value pairs into an object.

// const keyValueToObject = (array) => {

//   const resultantObj = Object.fromEntries(array)

// return resultantObj
// };

// const result = keyValueToObject([['a', 1], ['b', 2]]);
// console.log(result)

const keyValueToObject = (array) => {
  return array.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
};

const result = keyValueToObject([
  ["a", 1],
  ["b", 2],
]);
console.log(result);
