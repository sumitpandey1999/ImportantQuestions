// Remove Duplicates from an Array of Objects
// Write a function to remove duplicates from an array of objects based on a key.
// const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
// removeDuplicates(arr, 'id'); // [{ id: 1 }, { id: 2 }]

const removeDuplicateObject = (array, id) => {
  let uniqueObject = new Set();
  return array.filter((item) => {
    if (uniqueObject.has(item[id])) {
      return false;
    }
    uniqueObject.add(item[id]);
    return true;
  });
};

const arr = [{ id: 1 }, { id: 2 }, { id: 1 }, { ss: 1 }, { ss: 1 }, { ss: 2 }];
const result = removeDuplicateObject(arr, "ss");
console.log(result);
