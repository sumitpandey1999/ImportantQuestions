// Flatten an Object
// Write a function to flatten a deeply nested object into a single-level object.
// const obj = { a: { b: { c: 1 } }, d: 2 };
// flatten(obj); // { 'a.b.c': 1, 'd': 2 }

const flattenSingleLevel = (obj, parent = "", result = {}) => {
  for (let key in obj) {
    let fullKey = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object") {
      flattenSingleLevel(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }

  return result;
};

const result = flattenSingleLevel({ a: { b: { c: 1 } }, d: 2 });
console.log(result);
