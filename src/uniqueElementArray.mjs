// Find Unique Element: Write a function that finds the single unique element in an array where all other elements appear twice.

const uniqueElement = (array) => {
  let arrObj1 = {};

  for (let num of array) {
    arrObj1[num] = (arrObj1[num] || 0) + 1;
  }

  for (let key in arrObj1) {
    if (arrObj1[key] === 1) {
      return key;
    }
  }
};

const result = uniqueElement([2, 3, 5, 2, 3]);
console.log(result);
