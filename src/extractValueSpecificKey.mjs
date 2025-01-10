// Write a function that extracts all unique values from an array of objects based on a specific key.

const extractValueSpecificKey = (array, value) => {
  let uniqueValue = new Set();

  for (let num of array) {
    if (num[value] !== undefined) {
      uniqueValue.add(num[value]);
    }
  }
  return Array.from(uniqueValue);
};

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
];
const result = extractValueSpecificKey(users, "name");
console.log(result);
