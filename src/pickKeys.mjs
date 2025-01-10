// Pick Keys: Write a function to create a new object with only specific keys from an existing object

const pickGivenKeys = (obj, keysArray) => {
  let resultantKey = {};

  for (let i = 0; i < keysArray.length; i++) {
    resultantKey[keysArray[i]] = obj[keysArray[i]];
  }
  return resultantKey;
};

const result = pickGivenKeys({ a: 1, b: 2, c: 3 }, ["a", "c"]);
console.log(result);
