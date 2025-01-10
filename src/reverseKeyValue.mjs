// Reverse Key-Value: Write a function to reverse the keys and values of an object.

const reverseKeyValue = (obj) => {
  let resultantObj = {};

  for (let key in obj) {
    resultantObj[obj[key]] = key;
  }

  return resultantObj;
};

const result = reverseKeyValue({ a: 1, b: 2 });
console.log(result);
