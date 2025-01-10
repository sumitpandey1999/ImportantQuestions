// Implement a function to remove duplicates from an array without using Set

const removeDublicate = (array) => {
  let resultantArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });

  return resultantArray;
};

const result = removeDublicate([2, 4, 2, 6, 4, 5]);
console.log(result);
