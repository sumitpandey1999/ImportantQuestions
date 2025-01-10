// Find Deep Key: Write a function to retrieve the value of a deeply nested key in an object.

const findDeepKey = (obj, keys) => {
  let arrayKey = keys.split(".");

  const resultant = arrayKey.reduce((acc, num) => {
    return acc && acc[num];
  }, obj);

  return resultant;
};

const result = findDeepKey({ a: { b: { c: 42 } } }, "a.b.c");
console.log(result);
