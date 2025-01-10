// Write a function that inverts an object.
// invert({ a: 1, b: 2, c: 3 }); // { 1: 'a', 2: 'b', 3: 'c' }

const invertsObject = (obj) => {
  let resultantArray = {};
  for (let key in obj) {
    resultantArray[obj[key]] = key;
  }

  return resultantArray;
};

const result = invertsObject({ a: 1, b: 2, c: 3 });
console.log(result);
