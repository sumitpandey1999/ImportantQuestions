// Write a function that flattens a nested array into a single array, e.g., [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5].

const flatternArray = (array, num) => {
  if (num === 0) return array;

  const resultantArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      resultantArray.push(...flatternArray(array[i], num - 1));
    } else {
      resultantArray.push(array[i]);
    }
  }

  return resultantArray;
};

const result = flatternArray([1, [2, [3, 4]], 5], 1);
console.log(result);
