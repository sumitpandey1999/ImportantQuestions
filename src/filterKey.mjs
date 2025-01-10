// Filter Object Keys: Write a function to filter an object’s keys based on a predicate.

const filterKey = (obj, target) => {
  const objectKeys = Object.keys(obj);
  let filterKey = new Set(objectKeys);

  filterKey.delete(target);

  let resultantKey = Array.from(filterKey);
  let resultanatObj = {};

  for (let key of resultantKey) {
    resultanatObj[key] = obj[key];
  }

  return resultanatObj;
};

const result = filterKey({ a: 1, b: 2, c: 3 }, "b");
console.log(result);
