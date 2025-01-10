// Get All Subsets of an Array
// Write a function to generate all subsets of a given array.
// subsets([1, 2]); // [[], [1], [2], [1, 2]]

const allSubSets = (array) => {
  let resultanatArray = [[]];

  for (let num of array) {
    let currentSubSet = [];
    for (let subSet of resultanatArray) {
      currentSubSet.push([...subSet, num]);
    }
    resultanatArray = [...resultanatArray, ...currentSubSet];
  }
  return resultanatArray;
};

const result = allSubSets([1, 2, 3]);
console.log(result);
