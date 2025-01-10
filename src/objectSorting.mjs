// Array of Objects Sorting
// Sort an array of objects by a key in ascending or descending order.
// const arr = [{ id: 3 }, { id: 1 }, { id: 2 }];
// sortArray(arr, 'id', 'asc'); // [{ id: 1 }, { id: 2 }, { id: 3 }]

const objectSorting = (array) => {
  let valuesObject = [];
  for (let i = 0; i < array.length; i++) {
    let objectValues = Object.values(array[i]);
    valuesObject.push(...objectValues);
  }

  for (let j = 0; j < valuesObject.length; j++) {
    for (let k = j; k < valuesObject.length - j - 1; k++) {
      if (valuesObject[k] > valuesObject[k + 1]) {
        let temp = valuesObject[k];
        valuesObject[k] = valuesObject[k + 1];
        valuesObject[k + 1] = temp;
      }
    }
  }

  let resultantArray = [];

  for (let z = 0; z < valuesObject.length; z++) {
    for (let r = 0; r < array.length; r++) {
      if (Object.values(array[r]).includes(valuesObject[z])) {
        resultantArray.push(array[r]);
        break;
      }
    }
  }
  return resultantArray;
};
const arr = [{ id: 3 }, { id: 1 }, { id: 2 }];
const result = objectSorting(arr);
console.log(result);
