// Write a function that extracts all unique values from an array of objects.
const uniqueValue = (array) => {
  let values = [];

  for (let i = 0; i < array.length; i++) {
    values.push(...Object.values(array[i]));
  }
  let resultantArray = new Set(values);
  return Array.from(resultantArray);
};

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
];
const result = uniqueValue(users);
console.log(result);
