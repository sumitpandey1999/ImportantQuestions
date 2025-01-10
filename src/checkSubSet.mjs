const checkSubSet = (obj, targetObj) => {
  for (let key in targetObj) {
    if (obj[key] !== targetObj[key]) {
      return false;
    }
  }
  return true;
};

const result = checkSubSet({ a: 1, b: 2 }, { a: 1, b: 4 });
console.log(result);
