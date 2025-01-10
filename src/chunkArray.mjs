// Chunk an Array: Create a function that splits an array into smaller arrays of a given size.

const chunkArray = (array, size) => {
  let resultantArray = [];
  if (size <= 0) return [];
  for (let i = 0; i < array.length; i = i + size) {
    resultantArray.push(array.slice(i, i + size));
  }
  return resultantArray;
};

const result = chunkArray([1, 2, 3, 4, 5, 6], 3);
console.log(result);
