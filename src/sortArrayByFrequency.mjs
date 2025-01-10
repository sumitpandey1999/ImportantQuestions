// Sort Array by Frequency: Sort an array by the frequency of its elements.

const sortByFrequency = (array) => {
  let frequencyElement = {};

  for (let num of array) {
    frequencyElement[num] = (frequencyElement[num] || 0) + 1;
  }

  array.sort((a, b) => frequencyElement[b] - frequencyElement[a]);

  return array;
};

const result = sortByFrequency([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]);
console.log(result);
