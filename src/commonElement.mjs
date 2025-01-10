// Write a function that takes two arrays and returns their intersection (common elements).

const intersectionArray = (array1, array2) => {
  const resultantArray = array1.filter((item) => {
    return array2.includes(item);
  });

  return resultantArray;
};
const result = intersectionArray([2, 3, 45, 6], [3, 5, 2, 6]);
console.log(result);
