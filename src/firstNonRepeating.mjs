// Write a function to return the first non-repeating character in a string.

// Input:
// "swiss"
// Output:
// "w"

const firstNonRepeating = (str) => {
  let strObj = {};
  let firstNonRepeatingChar = "";
  let strArray = str.toLowerCase().split("");
  for (let key of strArray) {
    strObj[key] = (strObj[key] || 0) + 1;
  }

  for (let key in strObj) {
    if (strObj[key] === 1) {
      firstNonRepeatingChar = key;
      break;
    }
  }

  console.log(strObj);
  return firstNonRepeatingChar;
};

const result = firstNonRepeating("swiss");
console.log(result);
