// Transform Object: Write a function to transform an object based on a mapping function.

const transformObject = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let targetKeys = keys.map((item, index) => item.toUpperCase());

  let resultantObject = {};

  for (let i = 0; i < targetKeys.length; i++) {
    resultantObject[targetKeys[i]] = values[i] * 2;
  }

  return resultantObject;
};

const result = transformObject({ a: 1, b: 2 }); // { A: 2, b: 4}
console.log(result);
