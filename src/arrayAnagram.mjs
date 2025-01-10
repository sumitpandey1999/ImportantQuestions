// Check for Anagrams: Write a function to check if two arrays are anagrams of each other.

const arrayAnagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let arrObj1 = {};
  let arrObj2 = {};

  for (let num of arr1) {
    arrObj1[num] = (arrObj1[num] || 0) + 1;
  }

  for (let num of arr2) {
    arrObj2[num] = (arrObj2[num] || 0) + 1;
  }

  for (let key in arrObj1) {
    if (arrObj1[key] !== arrObj2[key]) {
      return false;
    }
  }
  return true;
};

const result = arrayAnagram([1, 2, 3, 4], [4, 2, 3, 1]);
console.log(result);
