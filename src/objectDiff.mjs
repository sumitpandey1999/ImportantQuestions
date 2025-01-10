// Object Diff: Create a function to find the difference between two objects.

const objectDiff = (obj1, obj2) => {
  let diffObj = {};

  let allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (let key of allKeys) {
    if (obj1[key] !== obj2[key]) {
      diffObj[key] = [obj1[key], obj2[key]];
    }
  }

  return diffObj;
};

const result = objectDiff({ a: 1, b: 2, c: 4 }, { a: 1, b: 3 });
console.log(result);
