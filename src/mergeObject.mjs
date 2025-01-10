// Merge Objects with Priority: Write a function that merges two objects, giving priority to the second object.

const mergeObject = (obj1, obj2) => {
  let resultantObj = {};

  for (let key in obj1) {
    resultantObj[key] = obj1[key];
  }

  for (let key in obj2) {
    resultantObj[key] = obj2[key];
  }
  return resultantObj;
};

const result = mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 });
console.log(result);
