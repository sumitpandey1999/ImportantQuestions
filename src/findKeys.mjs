// Find Keys with Value: Write a function to find all keys in an object that have a specific value.

const findKeyForValue = (obj, value) => {
  let resultanatObj = {};

  for (let key in obj) {
    if (obj[key] === value) {
      resultanatObj[key] = obj[key];
    }
  }

  let resultantKey = Object.keys(resultanatObj);

  return resultantKey;
};

const result = findKeyForValue({ a: 1, b: 2, c: 1 }, 1);
console.log(result);
