// Write a function to deep clone a nested object.

const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;

  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
};

const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);

cloned.b.c = 42;
console.log(obj.b.c); // 2 (original is unaffected)

// const deepClone = (obj) => {
//   const resultantClone = JSON.parse(JSON.stringify(obj));
//   console.log(obj);
//   resultantClone.a = 2;
//   return resultantClone;
// };

// const result = deepClone({ a: 1, b: { c: 2, d: 3 } });
// console.log(result);
