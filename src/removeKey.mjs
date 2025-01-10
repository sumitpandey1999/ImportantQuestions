// Write a function that removes a key from a nested object while preserving the structure.

const removeKey = (obj, target) => {
  let newObj = Object.assign({}, obj);

  for (let key in newObj) {
    if (key === target) {
      delete newObj[key];
    } else if (typeof newObj[key] === "object") {
      newObj[key] = removeKey(newObj[key], target);
    }
  }

  return newObj;
};

const result = removeKey({ a: { b: 1, c: { d: 2 } }, e: 3 }, "e");
console.log(result);
